# EmailJS Setup Guide for Quotation Form

This guide explains how to configure EmailJS to send quotation inquiries to the business owner and thank you emails to clients.

## Overview

The quotation form in the **ContactSection** component now sends **two emails**:
1. **Inquiry Email** - Sent to the business owner with all customer details
2. **Thank You Email** - Sent to the customer confirming their inquiry was received

## Prerequisites

- EmailJS account (free tier available at https://www.emailjs.com/)
- Business owner email address: `Shivayinteriordelhi@gmail.com`

## Step-by-Step Setup

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/ and sign up for a free account
- Verify your email address

### 2. Get Your API Keys

#### Service ID:
- Log in to EmailJS dashboard
- Go to **Email Services** (left sidebar)
- Click **Add Service** or select an existing service
- Copy the **Service ID** (e.g., `service_xxxxx`)

#### Public Key:
- Go to **Account** (top right) → **API Keys**
- Copy the **Public Key** (starts with alphanumeric characters)

### 3. Create Email Templates

#### Template 1: Owner Inquiry Email
This template receives the quotation inquiry and is sent to the business owner.

**Create a new template:**
1. In the dashboard, go to **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Fill in the template details:

**Template Name:** `Quotation_Inquiry` (or similar)

**Email Content (HTML or plain text):**
```html
<h2>New Quotation Inquiry</h2>
<p><strong>Customer Name:</strong> {{from_name}}</p>
<p><strong>Phone:</strong> {{from_phone}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Property Type:</strong> {{property_type}}</p>
<p><strong>Inquiry Date:</strong> {{inquiry_date}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

**Default Recipient Email:** `Shivayinteriordelhi@gmail.com`

4. Save the template and copy its **Template ID** (e.g., `template_xxxxx`)

#### Template 2: Client Thank You Email (Optional but Recommended)
This template is sent to the customer after their inquiry is submitted.

**Create a new template:**
1. Repeat steps 1-3 with these details:

**Template Name:** `Customer_ThankYou` (or similar)

**Email Content:**
```html
<h2>Thank You for Your Inquiry, {{to_name}}!</h2>
<p>We have received your quotation request for <strong>{{property_type}}</strong> property design.</p>
<p>Our team will review your requirements and get back to you shortly with personalized design options and pricing.</p>
<p><strong>In the meantime, feel free to contact us:</strong></p>
<p>📞 <strong>Phone:</strong> {{contact_phone}}</p>
<p>📧 <strong>Email:</strong> {{contact_email}}</p>
<p>Thank you for choosing {{company_name}}!</p>
<p>Best regards,<br>
<strong>Shivay Interior Decor Team</strong></p>
```

**Default Recipient Email:** `{{to_email}}` (will be set dynamically from the customer's email)

4. Save and copy the **Template ID**

### 4. Configure Environment Variables

Create a `.env` file in the project root (or copy from `env.emailjs.example`):

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_inquiry_template_id_here
VITE_EMAILJS_THANKYOU_TEMPLATE_ID=your_thankyou_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example (replace with your actual values):**
```env
VITE_EMAILJS_SERVICE_ID=service_a1b2c3d4e5f
VITE_EMAILJS_TEMPLATE_ID=template_inquiry_xyz
VITE_EMAILJS_THANKYOU_TEMPLATE_ID=template_thankyou_abc
VITE_EMAILJS_PUBLIC_KEY=abcd1234efgh5678ijkl9012
```

### 5. Test the Setup

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the **Contact** section on the website

3. Fill out the **Quotation Form** with test data

4. Click **Submit Inquiry**

5. Check:
   - ✅ Business owner email receives the inquiry
   - ✅ Customer receives thank you email
   - ✅ Success message displays on the form

## Email Service Functions

The email functionality is located in `src/services/emailService.ts` and provides:

### `initializeEmailJS()`
Initializes EmailJS with the public key from environment variables.

### `sendQuotationToOwner(formData)`
Sends the quotation inquiry to the business owner.

**Parameters:**
- `formData.name` - Customer name
- `formData.phone` - Customer phone number
- `formData.email` - Customer email
- `formData.propertyType` - Type of property (residential, commercial, etc.)
- `formData.message` - Additional message from customer

### `sendThankYouToClient(formData)`
Sends a thank you email to the customer.

### `sendQuotationEmails(formData)`
Calls both functions above. This is the main function used in the form submission.

## Troubleshooting

### Emails not sending?
1. ✅ Verify all environment variables are correctly set
2. ✅ Check that your EmailJS email service is activated
3. ✅ Ensure templates are created and published
4. ✅ Check browser console for error messages
5. ✅ Visit EmailJS dashboard → **Logs** to see failed deliveries

### Template variables not populating?
- Variable names must match exactly in templates (e.g., `{{from_name}}`)
- Check that the template includes a default recipient email or the variable `{{to_email}}`

### Want to use a single template for both emails?
You can omit `VITE_EMAILJS_THANKYOU_TEMPLATE_ID` and create separate logic, or use the same template for both with different recipient variables.

## Advanced Customization

### Adding more form fields
1. Add the field to the form in `ContactSection.tsx`
2. Include it in `quotationData` object
3. Add the corresponding variable to your EmailJS template (e.g., `{{new_field}}`)

### Changing the recipient email
Edit `src/services/emailService.ts` in the `sendQuotationToOwner` function:
```typescript
to_email: "newemail@example.com", // Change this
```

### Custom email styling
Use HTML/CSS in your EmailJS email templates for professional formatting. EmailJS supports basic HTML.

## Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Email Templates](https://www.emailjs.com/docs/introduction/create-service/)
- [Available Template Variables](https://www.emailjs.com/docs/introduction/template-variables/)

---

**Last Updated:** December 2024
**Project:** Shivay Interior Decor
