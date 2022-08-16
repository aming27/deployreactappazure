
resource "azurerm_app_service_plan" "plans" {
  name                         = "erikasensio-sp-we-001"
  resource_group_name          = azurerm_resource_group.resource_group.name
  location                     = var.location
  
  kind                         = "Windows"
  sku {
    tier     = "Standard"
    size     = "S1"
   
  }
}

