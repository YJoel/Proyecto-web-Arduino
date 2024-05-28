#include <LiquidCrystal.h>
#include "SR04.h"
#define TRIG_PIN 9
#define ECHO_PIN 8
int rs = 12;
int e = 11;
int d4 = 5;
int d5 = 4;
int d6 = 3;
int d7 = 2;
long a;

String entrada = "";
int alto = 0;
String altoStr = "";
int diametro = 0;
String diametroStr = "";
// int largo = 0;
String hola = "";
int pasos = 1;
bool bandera = false;

SR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);
LiquidCrystal lcd(rs, e, d4, d5, d6, d7);

void setup() {
  // put your setup code here, to run once:
  lcd.begin(16, 2);
  Serial.begin(9600);
}

void loop() {
  /*
  if(pasos == 1){
    if(Serial.available() > 0){
      // Esperar a la entrada del ususario
      altoStr = Serial.readString();
      for(int i = 0; i < altoStr.length(); i ++){
        if(altoStr[i] == '\n'){
          altoStr.remove(i);
        }
      }
      pasos++;
      Serial.println(altoStr);
    }
  }
  else if(pasos == 2){
    if(Serial.available() > 0){
      Serial.println("Ingrese el diametro");
      diametroStr = Serial.readString();
      for(int i = 0; i < diametroStr.length(); i ++){
        if(diametroStr[i] == '\n'){
          diametroStr.remove(i);
        }
      }
      pasos++;
      Serial.println(diametroStr);
    }
  }
  else if(pasos == 3){
    Serial.println("programa Terminado");
    Serial.println("Alto " + altoStr);
    Serial.println("Diametro " + diametroStr);
    pasos = 1;
  }
  // send data only when you receive data:

  */
  // put your main code here, to run repeatedly:
  lcd.setCursor(0,0);
  a=sr04.Distance();
  lcd.print("Distance: ");
  lcd.print(a);
  lcd.print("cm");
  Serial.print(a);
  Serial.print("\n");
  delay(1000);
  
}


