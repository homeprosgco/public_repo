// Helper function to validate email format
  String? validateEmail(String email) {
    const String emailPattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
    final RegExp regex = RegExp(emailPattern);
    if (email.isEmpty) {
      return 'Email cannot be empty';
    } else if (!regex.hasMatch(email)) {
      return 'Enter a valid email address';
    }
    return null; // Email is valid
  }