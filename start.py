from os import chdir, system

chdir('/home/rahman/Codes/oppillaMicrosystem/confluent-5.4.1/')
text = system('bin/confluent local status')

print(text)
