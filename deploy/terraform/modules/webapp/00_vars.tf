variable resource_group {
  description = "The name of the resource group for each location if you don't want to create it."
  type        = map(string)
  default     = {}
}
variable location {
  description = "Location where resources will be deployed"
  type        = string 
  default     = "West Europe"
}


variable notification_emails {
  description = "The email addresses to notify scaling operations"
  type        = list(string)
  default     = []
}

variable app_settings {
  description = "The application settings to add in the service"
  default     = {}
}

variable sku {
  description = ""
  type        = object({ tier = string, size = string, min_capacity = number, max_capacity = number })
  default     = { tier = "default", size = "", min_capacity = 0, max_capacity = 0 }
}

variable use64bits {
  description = "Creates the webapp instance in 64 bits mode."
  default     = false
}

variable websockets {
  description = "Enables websockets."
  type        = bool
  default     = false
}

variable ignore_app_settings {
  description = "Ignores and it does not create anything in web app settings."
  default     = false
}

variable use_certificate {
  description = "Use Specific certificate"
  type        = object({ certificate = string, password = string })
  default     = { certificate = "", password = "" }
}

variable cors_allowed_origins {
  description = "allowed origins for cors policies in app services"
  type        = list(string)
  default     = []
}

variable allowed_cidrs {
  description = "Set of allowed CIDR formatted Ips which has access to the resource"
  # type        = list(object({ name = string, cidr = string, priority = number}))
  default     = []
}

variable allowed_subnets {
  description = "Set of allowed subnets defining which subnets has access to the resource"
  # type        = list(object({ subnet_id = string, priority = number }))
  default     = []
}

variable webapps {
  description = "Properties webapps"
  type        = any
}

variable use_custom_service_plans {
  description = "Sets when you are going to reuse an existing service plan in your apps"
  default     = false
}

variable dotnet_framework_version {
  description = "The version of the .net framework's CLR used in this App Service."
  default     = null
}



