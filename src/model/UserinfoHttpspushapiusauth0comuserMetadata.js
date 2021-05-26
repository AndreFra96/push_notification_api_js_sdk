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
import DatabaseConfiguration from './DatabaseConfiguration';
import FirebaseAdminKey from './FirebaseAdminKey';

/**
* The UserinfoHttpspushapiusauth0comuserMetadata model module.
* @module model/UserinfoHttpspushapiusauth0comuserMetadata
* @version 1.0.0
*/
export default class UserinfoHttpspushapiusauth0comuserMetadata {
    /**
    * Constructs a new <code>UserinfoHttpspushapiusauth0comuserMetadata</code>.
    * auth0 user metadata
    * @alias module:model/UserinfoHttpspushapiusauth0comuserMetadata
    * @class
    * @param firebaseAdminKey {module:model/FirebaseAdminKey} 
    * @param sqlDbConfig {module:model/DatabaseConfiguration} 
    */

    constructor(firebaseAdminKey, sqlDbConfig) {
        
        
        this['firebase_admin_key'] = firebaseAdminKey;
        this['sql_db_config'] = sqlDbConfig;
        
    }

    /**
    * Constructs a <code>UserinfoHttpspushapiusauth0comuserMetadata</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserinfoHttpspushapiusauth0comuserMetadata} obj Optional instance to populate.
    * @return {module:model/UserinfoHttpspushapiusauth0comuserMetadata} The populated <code>UserinfoHttpspushapiusauth0comuserMetadata</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserinfoHttpspushapiusauth0comuserMetadata();
                        
            
            if (data.hasOwnProperty('firebase_admin_key')) {
                obj['firebase_admin_key'] = FirebaseAdminKey.constructFromObject(data['firebase_admin_key']);
            }
            if (data.hasOwnProperty('sql_db_config')) {
                obj['sql_db_config'] = DatabaseConfiguration.constructFromObject(data['sql_db_config']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/FirebaseAdminKey} firebase_admin_key
    */
    'firebase_admin_key' = undefined;
    /**
    * @member {module:model/DatabaseConfiguration} sql_db_config
    */
    'sql_db_config' = undefined;




}