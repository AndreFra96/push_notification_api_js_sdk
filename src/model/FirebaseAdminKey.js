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

import ApiClient from '../ApiClient';

/**
* The FirebaseAdminKey model module.
* @module model/FirebaseAdminKey
* @version 1.0.0
*/
export default class FirebaseAdminKey {
    /**
    * Constructs a new <code>FirebaseAdminKey</code>.
    * @alias module:model/FirebaseAdminKey
    * @class
    * @param type {String} FCM type
    * @param projectId {String} FCM project id
    * @param privateKeyId {String} FCM private key id
    * @param privateKey {String} FCM private key
    * @param clientEmail {String} FCM client email
    * @param clientId {String} FCM client id
    * @param authUri {String} FCM auth uri
    * @param tokenUri {String} FCM token uri
    * @param authProviderX509CertUrl {String} auth_provider_x509_cert_url
    * @param clientX509CertUrl {String} FCM client_x509_cert_url
    */

    constructor(type, projectId, privateKeyId, privateKey, clientEmail, clientId, authUri, tokenUri, authProviderX509CertUrl, clientX509CertUrl) {
        
        
        this['type'] = type;
        this['project_id'] = projectId;
        this['private_key_id'] = privateKeyId;
        this['private_key'] = privateKey;
        this['client_email'] = clientEmail;
        this['client_id'] = clientId;
        this['auth_uri'] = authUri;
        this['token_uri'] = tokenUri;
        this['auth_provider_x509_cert_url'] = authProviderX509CertUrl;
        this['client_x509_cert_url'] = clientX509CertUrl;
        
    }

    /**
    * Constructs a <code>FirebaseAdminKey</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FirebaseAdminKey} obj Optional instance to populate.
    * @return {module:model/FirebaseAdminKey} The populated <code>FirebaseAdminKey</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FirebaseAdminKey();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('private_key_id')) {
                obj['private_key_id'] = ApiClient.convertToType(data['private_key_id'], 'String');
            }
            if (data.hasOwnProperty('private_key')) {
                obj['private_key'] = ApiClient.convertToType(data['private_key'], 'String');
            }
            if (data.hasOwnProperty('client_email')) {
                obj['client_email'] = ApiClient.convertToType(data['client_email'], 'String');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('auth_uri')) {
                obj['auth_uri'] = ApiClient.convertToType(data['auth_uri'], 'String');
            }
            if (data.hasOwnProperty('token_uri')) {
                obj['token_uri'] = ApiClient.convertToType(data['token_uri'], 'String');
            }
            if (data.hasOwnProperty('auth_provider_x509_cert_url')) {
                obj['auth_provider_x509_cert_url'] = ApiClient.convertToType(data['auth_provider_x509_cert_url'], 'String');
            }
            if (data.hasOwnProperty('client_x509_cert_url')) {
                obj['client_x509_cert_url'] = ApiClient.convertToType(data['client_x509_cert_url'], 'String');
            }
        }
        return obj;
    }

    /**
    * FCM type
    * @member {String} type
    */
    'type' = undefined;
    /**
    * FCM project id
    * @member {String} project_id
    */
    'project_id' = undefined;
    /**
    * FCM private key id
    * @member {String} private_key_id
    */
    'private_key_id' = undefined;
    /**
    * FCM private key
    * @member {String} private_key
    */
    'private_key' = undefined;
    /**
    * FCM client email
    * @member {String} client_email
    */
    'client_email' = undefined;
    /**
    * FCM client id
    * @member {String} client_id
    */
    'client_id' = undefined;
    /**
    * FCM auth uri
    * @member {String} auth_uri
    */
    'auth_uri' = undefined;
    /**
    * FCM token uri
    * @member {String} token_uri
    */
    'token_uri' = undefined;
    /**
    * auth_provider_x509_cert_url
    * @member {String} auth_provider_x509_cert_url
    */
    'auth_provider_x509_cert_url' = undefined;
    /**
    * FCM client_x509_cert_url
    * @member {String} client_x509_cert_url
    */
    'client_x509_cert_url' = undefined;




}
