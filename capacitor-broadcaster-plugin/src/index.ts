/// <reference lib="dom" />
export * from './definitions';
export * from './web';

import { Plugins } from '@capacitor/core';

const { BroadcasterPlugin } = Plugins;

export class BroadcasterPluginHelper  {
  
    eventTarget = new EventTarget();

    constructor() {}

    async addEventListener( eventName:string, listener:( data:any ) => void ) {

        this.eventTarget.addEventListener( eventName, ( ev:CustomEvent ) => listener( ev.detail) );

        await BroadcasterPlugin.addNativeEventListener( { eventName:eventName })

    }
    async removeEventListener( eventName:string, listener:( data:any ) => void ) {

        this.eventTarget.removeEventListener( eventName, listener );

        await BroadcasterPlugin.removeNativeEventListener( { eventName:eventName })

    }
    async dispatchNativeEvent( eventName:string, data:any  ) {

        await BroadcasterPlugin.dispatchNativeEvent( { eventName:eventName, data:data })

    }

    async dispatchEvent( eventName:string, data:any  ) {

        const event = new CustomEvent( eventName, { detail: data } );  
        
        this.eventTarget.dispatchEvent( event )
    }

}
