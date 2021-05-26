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
* The GroupMessage model module.
* @module model/GroupMessage
* @version 1.0.0
*/
export default class GroupMessage {
    /**
    * Constructs a new <code>GroupMessage</code>.
    * @alias module:model/GroupMessage
    * @class
    * @param title {String} titolo del messaggio
    * @param body {String} corpo del messaggio
    * @param group {Number} gruppo destinatario
    */

    constructor(title, body, group) {
        
        
        this['title'] = title;
        this['body'] = body;
        this['group'] = group;
        
    }

    /**
    * Constructs a <code>GroupMessage</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GroupMessage} obj Optional instance to populate.
    * @return {module:model/GroupMessage} The populated <code>GroupMessage</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupMessage();
                        
            
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'Number');
            }
        }
        return obj;
    }

    /**
    * titolo del messaggio
    * @member {String} title
    */
    'title' = undefined;
    /**
    * corpo del messaggio
    * @member {String} body
    */
    'body' = undefined;
    /**
    * gruppo destinatario
    * @member {Number} group
    */
    'group' = undefined;




}