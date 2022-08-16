terraform {
  required_providers {
    azurerm = ">= 3.0.0"
    azapi = {
      source  = "azure/azapi"
      version = "=0.3.0"
    }
  }
}

