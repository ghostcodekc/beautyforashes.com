# Beauty For Ashes — Luxury Bridal & Wedding Makeup Artistry

Official web application for **Beauty For Ashes**, a premier bridal and wedding makeup artistry studio based in Kansas City, MO, founded by **Jesi Dang-Machuca** and **Rochelle Rodriquez**.

---

## 💍 Tech Stack

### Frontend
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Typography:** *Playfair Display* (Editorial Headings), *Cardo* (Body), *Sacramento* (Cursive Accents), and *Inter* (UI Controls)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Interactive FX:** Canvas Confetti

### Backend & Cloud Architecture
- **Serverless Framework:** [AWS SAM (Serverless Application Model)](https://aws.amazon.com/serverless/sam/)
- **Compute:** AWS Lambda ([EmailSenderFunction](template.yaml)) running on **Python 3.15** (Amazon Linux 2023)
- **API:** Amazon API Gateway (REST API with CORS)
- **Email Service:** Amazon Simple Email Service (SES)
- **Hosting & CI/CD:** [AWS Amplify Hosting](amplify.yml)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- *(Optional for backend changes)* AWS SAM CLI & AWS CLI

### 1. Installation
```bash
npm install
```

### 2. Local Development
Start the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
Compile and bundle the production assets into `dist/`:
```bash
npm run build
```

To preview the built production app locally:
```bash
npm run preview
```

---

## ☁️ Deployment

### Frontend (AWS Amplify)
The frontend is continuously deployed via **AWS Amplify Hosting**. Any push to the `main` branch triggers an automated build configured in [amplify.yml](amplify.yml):
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Backend (AWS SAM)
The Lambda function and API Gateway are deployed using the AWS SAM CLI.

1. Configure your AWS credentials:
   ```bash
   aws configure
   ```

2. Package the function and upload artifacts to S3:
   ```bash
   sam package \
     --template-file template.yaml \
     --output-template-file packaged.yaml \
     --s3-bucket cdk-hnb659fds-assets-172861630355-us-east-1 \
     --region us-east-1
   ```

3. Deploy the CloudFormation stack:
   ```bash
   sam deploy \
     --template-file packaged.yaml \
     --stack-name SendEmail \
     --capabilities CAPABILITY_IAM \
     --region us-east-1
   ```

*Or combine packaging and deployment:*
```bash
sam package --template-file template.yaml --output-template-file packaged.yaml --s3-bucket cdk-hnb659fds-assets-172861630355-us-east-1 --region us-east-1 && \
sam deploy --template-file packaged.yaml --stack-name SendEmail --capabilities CAPABILITY_IAM --region us-east-1
```

---

## 📁 Project Structure

```
├── public/                 # Static assets (images, icons, favicon)
│   └── assets/images/      # Real bridal gallery, artist portraits, and logos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Glassmorphic header with responsive mobile drawer
│   │   ├── Hero.jsx              # Editorial bridal hero with trust metrics & CTAs
│   │   ├── BrandStrip.jsx        # Prestige brand experience strip (Chanel, NARS, etc.)
│   │   ├── Services.jsx          # 3 luxury package tiers + specialty offerings
│   │   ├── PricingCalculator.jsx # Interactive bridal party investment calculator
│   │   ├── Gallery.jsx           # Filterable portfolio + full-screen Lightbox modal
│   │   ├── MeetArtists.jsx       # Founder spotlight (Jesi & Rochelle)
│   │   ├── Testimonials.jsx      # Verified bride reviews & venue tags
│   │   ├── FAQ.jsx               # Bridal guidance accordion
│   │   ├── ContactForm.jsx       # Wedding date inquiry form connected to SES API
│   │   └── Footer.jsx            # Luxury footer with scripture quote & links
│   ├── App.jsx             # Main app container & cross-component state
│   ├── index.css           # Tailwind v4 theme, fonts, and luxury animations
│   └── main.jsx            # React root mount
├── send-email/             # Lambda function source code (Python 3.15)
│   └── send-email.py       # Amazon SES email dispatcher
├── amplify.yml             # AWS Amplify Hosting build pipeline
├── template.yaml           # AWS SAM infrastructure template (source)
├── packaged.yaml           # Packaged SAM CloudFormation template (with S3 codeUri)
├── vite.config.js          # Vite config with React & Tailwind v4 plugins
└── package.json            # Project dependencies and npm scripts
```

---

## 🎨 Color Palette

| Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Slate Charcoal** | `#1E272C` | Primary dark theme, headers, luxury contrast |
| **Rose Blush** | `#DEB3AD` | Accent elements, buttons, badges, highlights |
| **Champagne Gold** | `#C5A059` | Subtle metallic glows, star ratings, elegance |
| **Silk Cream** | `#FCFAF8` | Clean, luminous background canvas |
| **Deep Charcoal** | `#343434` | High-contrast readable typography |