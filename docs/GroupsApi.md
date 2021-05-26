# PushNotificationApi.GroupsApi

All URIs are relative to *http://localhost:3100*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroup**](GroupsApi.md#addGroup) | **POST** /groups | Aggiunge un nuovo gruppo
[**deleteGroupById**](GroupsApi.md#deleteGroupById) | **DELETE** /groups/{id} | Cancella il gruppo in base all&#x27;id
[**getAllGroups**](GroupsApi.md#getAllGroups) | **GET** /groups | Resituisce la lista di tutti i gruppi
[**getGroupById**](GroupsApi.md#getGroupById) | **GET** /groups/{id} | Restituisce il gruppo corrispondente all&#x27;id
[**getGroupExecuted**](GroupsApi.md#getGroupExecuted) | **GET** /groups/execute/{id} | Restituisce i risultati dell&#x27;esecuzione della query

<a name="addGroup"></a>
# **addGroup**
> InlineResponse201 addGroup(body)

Aggiunge un nuovo gruppo

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.GroupsApi();
let body = new PushNotificationApi.Group(); // Group | gruppo da aggiungere

apiInstance.addGroup(body, (error, data, response) => {
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
 **body** | [**Group**](Group.md)| gruppo da aggiungere | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroupById"></a>
# **deleteGroupById**
> deleteGroupById(id)

Cancella il gruppo in base all&#x27;id

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.GroupsApi();
let id = "id_example"; // String | gruppo da eliminare

apiInstance.deleteGroupById(id, (error, data, response) => {
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
 **id** | **String**| gruppo da eliminare | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllGroups"></a>
# **getAllGroups**
> InlineResponse200 getAllGroups()

Resituisce la lista di tutti i gruppi

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.GroupsApi();
apiInstance.getAllGroups((error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGroupById"></a>
# **getGroupById**
> InlineResponse2001 getGroupById(id)

Restituisce il gruppo corrispondente all&#x27;id

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.GroupsApi();
let id = 1.2; // Number | id da cercare

apiInstance.getGroupById(id, (error, data, response) => {
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
 **id** | **Number**| id da cercare | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGroupExecuted"></a>
# **getGroupExecuted**
> getGroupExecuted(id)

Restituisce i risultati dell&#x27;esecuzione della query

### Example
```javascript
import PushNotificationApi from 'push_notification_api';
let defaultClient = PushNotificationApi.ApiClient.instance;


let apiInstance = new PushNotificationApi.GroupsApi();
let id = 1.2; // Number | id gruppo

apiInstance.getGroupExecuted(id, (error, data, response) => {
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
 **id** | **Number**| id gruppo | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

