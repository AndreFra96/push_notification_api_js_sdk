/**
 * Push notification API
 * ### API per invio di notifiche push personalizzate agli utenti dell'applicazione RCA SUPPORT  Il servizio di assistenza dell'azienda RCA SRL prevede l'utilizzo di un'applicazione  multipiattaforma (Android, iOS, Web App) chiamata RCA SUPPORT, lo scopo principale di queste api  è l'invio di notifiche push personalizzate agli utenti dell'applicazione  #### Push notification token Ad ogni dispositivo client dell'applicazione viene automaticamente associato un token,  necessario per inviare una notifica push diretta al dispositivo. Tutti i token vengono salvati in un database SQL dove sono presenti i dati sui clienti dell'azienda, ad ogni token viene associato un cliente ed un locale.  #### Firebase Admin SDK e Firebase cloud Messaging (FCM) Il servizio utilizzato per l'invio delle notifiche push è FCM, ed è strutturato in questo modo:  - *Generatore di messaggi e target:*      si occupa della creazione dei messaggi creando delle triplette titolo, descrizione, token che vengono inviate al backend FCM tramite Firebase Admin SDK  - *FCM backend:* legge i dati inviati dal generatore, genera i metadati del messaggio e li invia agli instradatori  - *Instradatori di messaggi specifici della piattaforma:*     - **Android Trasport Layer** per dispositivi Android     - **iOS / APNs** per dispositivi iOS     - **Web Push** per app web  - *SDK sul dispositivo:* viene visualizzata la notifica o il messaggio viene gestito in base allo stato in primo piano / in background dell'app e a qualsiasi logica dell'applicazione pertinente.  #### Analisi dei requisiti  Lo scopo di questa API è quello di **Generatore di messaggi e target**, in particolare si occupa di:  1. Interazione con database SQL dove sono salvati i dati 2. Utilizzo del servizio FCM (Firebase Cloud Messaging) per l'invio delle notifiche push  
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PushNotificationApi);
  }
}(this, function(expect, PushNotificationApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PushNotificationApi.FirebaseAdminKey();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FirebaseAdminKey', function() {
    it('should create an instance of FirebaseAdminKey', function() {
      // uncomment below and update the code to test FirebaseAdminKey
      //var instane = new PushNotificationApi.FirebaseAdminKey();
      //expect(instance).to.be.a(PushNotificationApi.FirebaseAdminKey);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new PushNotificationApi.FirebaseAdminKey();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "project_id")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new PushNotificationApi.FirebaseAdminKey();
      //expect(instance).to.be();
    });

    it('should have the property privateKeyId (base name: "private_key_id")', function() {
      // uncomment below and update the code to test the property privateKeyId
      //var instane = new PushNotificationApi.FirebaseAdminKey();
      //expect(instance).to.be();
    });

    it('should have the property privateKey (base name: "private_key")', function() {
      // uncomment below and update the code to test the property privateKey
      //var instane = new PushNotificationApi.FirebaseAdminKey();
      //expect(instance).to.be();
    });

    it('should have the property clientEmail (base name: "client_email")', function() {
      // uncomment below and update the code to test the property clientEmail
      //var instane = new PushNotificationApi.FirebaseAdminKey();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new PushNotificationApi.FirebaseAdminKey();
      //expect(instance).to.be();
    });

    it('should have the property authUri (base name: "auth_uri")', function() {
      // uncomment below and update the code to test the property authUri
      //var instane = new PushNotificationApi.FirebaseAdminKey();
      //expect(instance).to.be();
    });

    it('should have the property tokenUri (base name: "token_uri")', function() {
      // uncomment below and update the code to test the property tokenUri
      //var instane = new PushNotificationApi.FirebaseAdminKey();
      //expect(instance).to.be();
    });

    it('should have the property authProviderX509CertUrl (base name: "auth_provider_x509_cert_url")', function() {
      // uncomment below and update the code to test the property authProviderX509CertUrl
      //var instane = new PushNotificationApi.FirebaseAdminKey();
      //expect(instance).to.be();
    });

    it('should have the property clientX509CertUrl (base name: "client_x509_cert_url")', function() {
      // uncomment below and update the code to test the property clientX509CertUrl
      //var instane = new PushNotificationApi.FirebaseAdminKey();
      //expect(instance).to.be();
    });

  });

}));
