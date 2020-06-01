import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(BroadcasterPlugin)
public class BroadcasterPlugin: CAPPlugin {
    
    @objc func addEventListener(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
    @objc func removeEventListener(_ call: CAPPluginCall) {
        
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }

    @objc func fireNativeEvent(_ call: CAPPluginCall) {
        
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
}
