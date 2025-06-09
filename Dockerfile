# Use the latest VS Code server image
FROM codercom/code-server:latest

# Switch to root for package installs
USER root

# Environment config
ENV DEBIAN_FRONTEND=noninteractive \
    ANDROID_SDK_ROOT=/opt/android-sdk \
    CHROME_EXECUTABLE=/usr/bin/google-chrome \
    FLUTTER_HOME=/opt/flutter \
    NVM_DIR=/home/coder/.nvm \
    NODE_VERSION=lts/* \
    VIRTUAL_ENV=/home/coder/.venv \
    TZ=America/New_York \
    PATH="/opt/flutter/bin:/opt/android-sdk/cmdline-tools/latest/bin:/opt/android-sdk/platform-tools:/root/.pub-cache/bin:/home/coder/.venv/bin:$PATH"

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Update & install all base dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates curl wget unzip bash gnupg xz-utils cmake ninja-build \
    pkg-config clang libglu1-mesa libdrm2 libgbm1 libgtk-3-0 libnspr4 libnss3 \
    libxfixes3 libu2f-udev libvulkan1 libappindicator3-1 libasound2 \
    libatk-bridge2.0-0 libatk1.0-0 libcups2 libdbus-1-3 libgdk-pixbuf2.0-0 \
    libxcomposite1 libxdamage1 libxrandr2 libxss1 fonts-liberation xdg-utils \
    php php-cli php-curl php-gd php-mbstring php-xml php-mysql php-zip \
    libpango-1.0-0 libpangoft2-1.0-0 libcairo2 wkhtmltopdf \
    php-intl php-soap php-bcmath composer mariadb-client python3 python3-pip \
    python3-venv openjdk-17-jdk \
 && wget -q -O google-chrome.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
 && apt install -y ./google-chrome.deb \
 && rm google-chrome.deb \
 && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Android SDK
RUN mkdir -p $ANDROID_SDK_ROOT/cmdline-tools && \
    curl -o sdk-tools.zip https://dl.google.com/android/repository/commandlinetools-linux-8512546_latest.zip && \
    unzip sdk-tools.zip -d $ANDROID_SDK_ROOT/cmdline-tools && \
    mv $ANDROID_SDK_ROOT/cmdline-tools/cmdline-tools $ANDROID_SDK_ROOT/cmdline-tools/latest && \
    rm sdk-tools.zip && \
    yes | sdkmanager --licenses && \
    sdkmanager "platform-tools" "platforms;android-33" "build-tools;33.0.2"

# Install AWS CLI
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && ./aws/install && rm -rf awscliv2.zip aws

# ✅ Add Google Cloud SDK securely
RUN mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | \
    gpg --dearmor -o /etc/apt/keyrings/cloud.google.gpg && \
    echo "deb [signed-by=/etc/apt/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" \
    | tee /etc/apt/sources.list.d/google-cloud-sdk.list && \
    apt-get update && \
    apt-get install -y google-cloud-sdk && \
    apt-get clean && rm -rf /var/lib/apt/lists/*


# Install Firebase CLI
RUN curl -sL https://firebase.tools | bash

# Install WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp

# Install Flutter SDK
RUN wget -q https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.16.0-stable.tar.xz && \
    tar -xf flutter_linux_3.16.0-stable.tar.xz -C /opt && rm flutter_linux_3.16.0-stable.tar.xz && \
    chown -R coder:coder $FLUTTER_HOME

# Switch to coder user
USER coder

#Create Python virtualenv as coder user
RUN python3 -m venv /home/coder/.venv && \
    /home/coder/.venv/bin/pip install --upgrade pip && \
    /home/coder/.venv/bin/pip install weasyprint Django pdfkit jinja2 beautifulsoup4 lxml requests soupsieve
   
    
# Install NVM, Node.js, and global npm packages
RUN curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash && \
    . "$NVM_DIR/nvm.sh" && \
    nvm install $NODE_VERSION && \
    nvm use $NODE_VERSION && \
    nvm alias default $NODE_VERSION && \
    npm install -g nx aws-cdk eslint prettier typescript ts-node ionic @nestjs/cli && \
    npx playwright install --with-deps && \
    echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc && \
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc && \
    echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.bashrc

# Final Flutter setup
RUN flutter doctor && flutter precache

# Workspace and ports
WORKDIR /workspace
EXPOSE 3000 3500 4000 4400 4401 5000 5001 5002 8000 8080 8085 8888 9000 9005 9099 9100 9199

# Start VS Code Server
CMD ["dumb-init", "code-server", "--bind-addr", "0.0.0.0:8000"]

