Install node 12
INstall openJDK

Android studio (installer par default mais a vérifier)
--> Android 10 (Q) avec
        - android sdk platform 29
        - Google APIs Intel x86 Atom System Image
--> Android SDK Build-Tools
        - 29.0.2


Dans ton ./bashrc
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

source $HOME/.bashrc

npx react-native init AwesomeProject

npm install


lancer appli :
npx react-native start

Puis dans un autre terminal :
npx react-native run-android
