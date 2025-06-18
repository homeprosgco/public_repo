# 🧰 Full-Stack Web Dev Monorepo | Angular, Flutter, React + Clean Architecture

This repo contains a professional, multi-framework monorepo demonstrating real-world full-stack applications built using **Uncle Bob’s Clean Architecture** principles and powered by modern tools like **Nx, AWS Amplify, GraphQL, Supabase, AWS CDK, AWS resources and Firebase**.

---

## 🎯 Purpose

To showcase scalable, real-world web and mobile application architecture using multiple frameworks — built for problem-solving, automation, and hands-on delivery. All projects reflect the mindset and skills of a **self-taught, job-ready full-stack developer** looking to contribute meaningfully to a remote engineering team.

---

## 🏗️ Project Highlights

### 📱 Flutter Applications (AWS + Riverpod)

- **Coming Soon Page**  
  Folder: `aws_basecamp-homeprosgapp_feature-coming_soon_early_adopter_email`  
  → Implements Clean Architecture with Flutter, powered by AWS Amplify.  
  → Collects and stores early adopter emails using GraphQL and AWS infrastructure.

- **Booking System**  
  Folder: `aws_basecamp-homeprosgapp_feature-booking`  
  → A fully functioning booking system built in Flutter using **Riverpod** for state management, **Amplify for backend**, and **GraphQL** for API communication.

---

### ⚛️ React App (Remix + Supabase)

- Folder: `serveprosplus`  
  → A modern web application built with the **Remix framework**, using **Mantine UI** for styling and theming.  
  → Implements full-stack **authentication and authorization** with Supabase and third-party services:
  - **Prisma** (ORM)
  - **Stripe** (Payments)
  - **Twilio** (SMS)
  - **OneSignal** (Push notifications)
  - **Apify** (Web scraping/data automation)

---

### 🅰️ Angular Application (GraphQL + Firebase)

- Folder: `tech1pro`  
  → A full-stack Angular application using **Apollo GraphQL Client** on the frontend  
  → Backend powered by **Firebase Functions**, querying **Firestore** with a **NestJS GraphQL API**  
  → Built using **Angular v2+** with structured, maintainable architecture

---

### ⚙️ Code Generation Tools

- Folder: `tools/codegen`  
  → Contains scaffold generators for both **Angular** and **Flutter** projects  
  → Automates project setup based on **Amplify data models → GraphQL schema → application layers**, using Clean Architecture

---

## 🌀 Nx Angular Monorepo + Tailwind + PrimeNG

This monorepo features a powerful **Angular + Nx + TailwindCSS + PrimeNG** stack for design system management.

### 🧱 Highlights:

- **Design Token System**  
  Shared design tokens across Tailwind and PrimeNG using CSS custom properties

- **Code-Generated Utility Maps**  
  Python scripts generate type-safe Tailwind spacing, typography, colors, etc.

- **Type-Safe Angular Directives**  
  Angular signals for declarative styling like `[twText]` and `[twSize]`

```html
<!-- Example usage -->
<div [twSize]="{ base: 'lg', md: 'xl' }"></div>
<p [twText]="{ base: 'headline-small', lg: 'display-small' }"></p>
