import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(BroadcasterPlugin)
public class BroadcasterPlugin: CAPPlugin {
    
    var observerMap = Dictionary<String,NSObjectProtocol>()
    
    @objc func addNativeEventListener(_ call: CAPPluginCall) {
        
        guard let eventName = call.getString("eventName") else {
            call.error("missing parameter 'eventName'!")
            return
        }
        
        var observer = observerMap[eventName]
        
        if( observer == nil ) {
         
            observer = NotificationCenter.default.addObserver(forName: NSNotification.Name(rawValue: eventName), object:self, queue: .main) { note in
                
                print( "native event \(eventName) received!")
            }
            
            observerMap[ eventName ] = observer
        }
        
        call.success()
    }
    
    @objc func removeNativeEventListener(_ call: CAPPluginCall) {

        guard let eventName = call.getString("eventName") else {
            call.error("missing parameter 'eventName'!")
            return
        }

        if let observer = observerMap[eventName]  {
            
            NotificationCenter.default.removeObserver(observer, name: NSNotification.Name(rawValue: eventName), object: self)
            
            observerMap.removeValue(forKey: eventName)
            
        }

        call.success()
    }

    @objc func dispatchNativeEvent(_ call: CAPPluginCall) {

        guard let eventName = call.getString("eventName") else {
            call.error("missing parameter 'eventName'!")
            return
        }

        guard let data = call.getObject("data") else {
            call.error("missing parameter 'data'!")
            return
        }

        NotificationCenter.default.post(name: NSNotification.Name(rawValue: eventName), object: self, userInfo:data )
        
        call.success()
    }
}
