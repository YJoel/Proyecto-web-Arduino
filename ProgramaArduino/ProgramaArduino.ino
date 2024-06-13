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

int pasos = 1;
String dimensiones = "";
String alto = "";
int altoInt = 0;
String diametro = "";
int diametroInt = 0;

SR04 sr04 = SR04(ECHO_PIN, TRIG_PIN);
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
      dimensiones = Serial.readString();
      for(int i = 0; i < dimensiones.length(); i ++){
        if(dimensiones[i] == '\n'){
          dimensiones.remove(i);
        }
      }
      alto = dimensiones.substring(0, dimensiones.indexOf(","));
      altoInt = alto.toInt();
      diametro = dimensiones.substring(dimensiones.indexOf(",")+1);
      diametroInt = diametro.toInt();
      pasos++;
    }
  }*/
  
  //else{

    // int vol = (altoInt - (int)a) * diametroInt;
    // int nivel = alto - (int)a;
    a = sr04.Distance();
    Serial.print("Hola ");
    Serial.println(int(a));
    delay(2000);
    /*
    lcd.print("Vol: ");
    lcd.print(vol);
    lcd.print("Nivel");
    lcd.print(nivel);
    */

    //lcd.print(a);
    //lcd.print("cm");

    /*
    Serial.print("Vol: ");
    Serial.print(vol);
    Serial.print("Nivel");
    Serial.print(nivel);
    Serial.print("\n");
    delay(1000);
  }*/
}
