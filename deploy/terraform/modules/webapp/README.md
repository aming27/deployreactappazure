![Terraform](https://img.shields.io/badge/terraform-%E2%89%A5%201.0.0-7B42BC?logo=terraform)
![AzureRM](https://img.shields.io/badge/azurerm-%E2%89%A5%202.64.0-0078D4?logo=microsoft%20azure)

# Web App
This module helps you in an azure web app creation using vnet integration and access_restrictions. 

## Input Parameters
- **resource_group**: (OPTIONAL) Here you can specify the resource group names where you want to create all resources. 
- **notification_emails**: (OPTIONAL) Notification emails for autoscaling in HA mode.
- **ignore_app_settings**: (OPTIONAL) Ignores and it does not create anything in web app settings. Default value is `false`.
- **use64bits**: (optional) Here you can specify if you want to use 64 bits mode in the web apps. Default value is `false`.
- **dotnet_framework_version**:  (optional) The version of the .net framework's CLR used in this App Service. Default value is `null` then uses Azure Default. (v2.0, v4.0, v5.0)
- **websockets**: (optional) specify if you want to enable WebSockets. Default value is `false`.
- **cors_allowed_origins**: (OPTIONAL)
- **sku**: (OPTIONAL) Here you can specify the `sku` of the webapps you are going to create:
    - **tier**: the application service plan tier (pe. `PremiumV2`).
    - **size**: the application service plan size (pe. `P2v2`).
    - **min_capacity**: the minimun web app instance number.
    - **max_capacity** : the maximum web app instance number.
- **use_certificate**: (OPTIONAL) Here you can specify a certificate path in case of requirement and the password associated. If you don't specify this, it will not create it.
    - **certificate**: the certificate in base64.
    - **password**: the password of the certificate.



## Output parameters

- **resource_group**: for each resource group created:
    - **id**: the ID of the Resource Group.
- **app_service_plans**: for each service plan created:
    - **id**: the ID of the App Service Plan component.
    - **maximum_number_of_workers**: the maximum number of workers supported with the App Service Plan's sku.

