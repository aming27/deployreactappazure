
resource "azurerm_app_service" "webapps" {
  
  name                    = "erikasensio-webapp-we-001"
  resource_group_name     = azurerm_resource_group.resource_group.name
  location                = var.Location
  app_service_plan_id     = azurerm_app_service_plan.plans.id
  https_only              = true
  client_affinity_enabled = false
  

  app_settings            = var.app_settings
  site_config {
    always_on                 = true
    http2_enabled             = false
    ftps_state                = "Disabled"
    use_32_bit_worker_process = !var.use64bits
    dotnet_framework_version  = var.dotnet_framework_version
    websockets_enabled        = var.websockets
    default_documents         = ["default.aspx","default.html","index.html","hostingstart.html"]

    cors {
      allowed_origins = var.cors_allowed_origins
    }
  }

  lifecycle {
    ignore_changes = [ app_settings ]
  }
}
