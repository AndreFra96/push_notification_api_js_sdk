# PushNotificationApi.TokensApi

All URIs are relative to *http://localhost:3100*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addToken**](TokensApi.md#addToken) | **POST** /tokens | Aggiunge un nuovo token
[**deleteToken**](TokensApi.md#deleteToken) | **DELETE** /tokens/{token} | Cancella il token
[**getToken**](TokensApi.md#getToken) | **GET** /tokens/{token} | Restituisce le informazioni relative ad un token
[**getTokens**](TokensApi.md#getTokens) | **GET** /tokens | Resituisce la lista di tutti i token

<a name="addToken"></a>
# **addToken**
> InlineResponse2013 addToken(body)

Aggiunge un nuovo token

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.TokensApi();
let body = null; // {String: String} | token da aggiungere

apiInstance.addToken(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: String}**](Object.md)| token da aggiungere | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteToken"></a>
# **deleteToken**
> deleteToken(token)

Cancella il token

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.TokensApi();
let token = "token_example"; // String | token da eliminare

apiInstance.deleteToken(token, (error, data, response) => {
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
 **token** | **String**| token da eliminare | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getToken"></a>
# **getToken**
> InlineResponse2003 getToken(token)

Restituisce le informazioni relative ad un token

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.TokensApi();
let token = "token_example"; // String | token da cercare

apiInstance.getToken(token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| token da cercare | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTokens"></a>
# **getTokens**
> InlineResponse2002 getTokens()

Resituisce la lista di tutti i token

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.TokensApi();
apiInstance.getTokens((error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

