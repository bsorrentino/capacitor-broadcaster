
  Pod::Spec.new do |s|
    s.name = 'CapacitorBroadcasterPlugin'
    s.version = '0.0.1'
    s.summary = 'Plugin to allow message exchange between javascript and native (and viceversa)'
    s.license = 'MIT'
    s.homepage = '.'
    s.author = 'bsorrentino'
    s.source = { :git => '.', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end