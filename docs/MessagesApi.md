# PushNotificationApi.MessagesApi

All URIs are relative to *http://localhost:3100*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendGroupMessage**](MessagesApi.md#sendGroupMessage) | **POST** /messages/group | Invia una notifica di gruppo
[**sendMessage**](MessagesApi.md#sendMessage) | **POST** /messages | Invia una notifica

<a name="sendGroupMessage"></a>
# **sendGroupMessage**
> InlineResponse2012 sendGroupMessage(body)

Invia una notifica di gruppo

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.MessagesApi();
let body = new PushNotificationApi.GroupMessage(); // GroupMessage | notifica da inviare

apiInstance.sendGroupMessage(body, (error, data, response) => {
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
 **body** | [**GroupMessage**](GroupMessage.md)| notifica da inviare | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendMessage"></a>
# **sendMessage**
> InlineResponse2011 sendMessage(body)

Invia una notifica

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.MessagesApi();
let body = new PushNotificationApi.Message(); // Message | notifica da inviare

apiInstance.sendMessage(body, (error, data, response) => {
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
 **body** | [**Message**](Message.md)| notifica da inviare | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

