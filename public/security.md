# Security Overview

_Last Updated: October 4, 2026_

This page describes the security measures Qorva has in place today. It does not claim any certification or third-party audit.

## How We Protect Your Data

- **Encryption in transit:** All traffic between your browser, our API and our providers uses TLS.
- **Encryption at rest:** Data is stored encrypted at rest by our database and file storage providers. Credentials you give us for integrations (ATS keys, mailbox tokens) are additionally encrypted by Qorva with AES-256-GCM before they are stored.
- **Tenant isolation:** Each company's data is kept in its own tenant, and every database query is scoped to the signed-in user's company.
- **Role-based permissions:** Owners decide what each team member can view, create, modify or delete.
- **Passwords and sign-in:** Passwords are stored as BCrypt hashes, never in clear text. Email-based multi-factor authentication (MFA) is available to every user.
- **Deletion:** When you delete a candidate or a job, the related data (matching reports, notes and conversations) is deleted with it. Users with permission to delete candidates can clear the whole candidate library from the application. Deleting a company account is done on request.

## Where Your Data Is Hosted

Qorva runs on Amazon Web Services in the United States (us-east-2, Ohio). The database is hosted on MongoDB Atlas in the same AWS region (us-east-2, Ohio).

## Subprocessors

| Provider | Purpose | Location |
|---|---|---|
| Amazon Web Services | Application hosting and file storage | United States (us-east-2) |
| MongoDB Atlas | Database | United States (us-east-2) |
| OpenAI | AI analysis of CVs and job posts | United States |
| Stripe | Billing and payments | United States |
| Microsoft | Sending email from a connected Microsoft 365 mailbox (only if you connect one) | Per your Microsoft 365 tenant |

If you connect an applicant tracking system (ATS), Qorva exchanges candidate and job data with that ATS on your behalf.

## Report a Security Issue

If you identify a security vulnerability, please report it to [contact@qorva.ai](mailto:contact@qorva.ai).
