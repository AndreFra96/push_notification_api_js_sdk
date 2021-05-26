# PushNotificationApi.Auth0Api

All URIs are relative to *http://localhost:3100*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserInfo**](Auth0Api.md#getUserInfo) | **GET** /auth0/userinfo | Resituisce le informazioni dell&#x27;utente
[**setUserAdminSDK**](Auth0Api.md#setUserAdminSDK) | **PUT** /auth0/firebasesdk | Imposta Firebase Admin SDK dell&#x27;utente
[**setUserDb**](Auth0Api.md#setUserDb) | **PUT** /auth0/database | Imposta database dell&#x27;utente

<a name="getUserInfo"></a>
# **getUserInfo**
> UserinfoResponse getUserInfo()

Resituisce le informazioni dell&#x27;utente

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.Auth0Api();
apiInstance.getUserInfo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserinfoResponse**](UserinfoResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setUserAdminSDK"></a>
# **setUserAdminSDK**
> setUserAdminSDK(body)

Imposta Firebase Admin SDK dell&#x27;utente

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.Auth0Api();
let body = new PushNotificationApi.FirebaseAdminKey(); // FirebaseAdminKey | firebase admin key

apiInstance.setUserAdminSDK(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FirebaseAdminKey**](FirebaseAdminKey.md)| firebase admin key | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="setUserDb"></a>
# **setUserDb**
> setUserDb(body)

Imposta database dell&#x27;utente

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.Auth0Api();
let body = new PushNotificationApi.DatabaseConfiguration(); // DatabaseConfiguration | configurazione database

apiInstance.setUserDb(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DatabaseConfiguration**](DatabaseConfiguration.md)| configurazione database | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

