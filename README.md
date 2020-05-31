# Auth0 files for FightPandemics


## Rules 
Scripts needed to configure integration with Auth0, they need to be activated in order for the authentication to work
The code has been updated to work with Node 12 enabled as environment

### mongo_id.js
Set Mongo id in app metadata for verified users
The `FP_DOMAIN` should be set in the rules configuration to the same value as used in the backend `.env AUTH_APP_URL`
This `mongo_id` is used as primary key `_id` for users in our mongo database, and stored in the JWT


## Templates
Email templates for emails from Auth0 delivered by our email provider, currently SendGrid.
Images must be external links, currently uploaded to SendGrid and delivered via their CDN.

### verification-email.html

Email sent to verify a user's email when they sign-up with email & password. Template name in Auth0: "Verification Email (using Link)"