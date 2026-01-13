# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Contact Form Email Setup

The contact form uses EmailJS to send messages to your email. Follow these steps to configure it:

### 1. Create an EmailJS Account

1. Sign up for a free account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. The free plan includes 200 emails per month

### 2. Set Up Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use **Custom SMTP**
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this later)

### 3. Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone number
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email address

4. Example template:
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   You have received a new message from your website contact form.
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   
   Message:
   {{message}}
   ```

5. Copy the **Template ID** (you'll need this later)

### 4. Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** and copy it

### 5. Configure Environment Variables

1. Create a `.env` file in the root directory of your project
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_RECIPIENT_EMAIL=truelinessolutions@gmail.com
```

3. Replace the placeholder values with your actual EmailJS credentials
4. **Important**: Never commit your `.env` file to version control. It should already be in `.gitignore`

### 6. Restart Your Development Server

After creating the `.env` file, restart your development server:

```sh
npm run dev
```

The contact form should now be able to send emails to your specified address!
