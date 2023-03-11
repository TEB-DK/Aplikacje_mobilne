# 🚀 Wprowadzenie do języka JavaScript 🚀

JavaScript to ``dynamicznie typowany`` język wysokiego poziomu. Najczęściej jest używany przy tworzeniu stron ``WWW``, zapewniając interaktywność stron oraz obsługę zdarzeń, walidacji formularzy czy budowanie elementów nawigacyjnych.

Takie wykorzystanie języka JavaScript ułatwia zastosowanie biblioteki, takiej jak ``jQuery``. Warto przy tym zauważyć, że używanie biblioteki nie powinno zastępować sensownej znajomości samego języka.

Dlatego też na tym kursie zostaniecie zapoznani z podstawowymi pojęciami i zastosowaniem języka JavaScript, a kolejnym krokiem będzie przejście do środowiska [🔗 ``React Native``](https://reactnative.dev/), które zostało stworzone na potrzeby tworzenia aplikacji webowych, a także mobilnych. Tak jak sama nazwa wskazuje, jest to ``natywny`` język odnoszący się do podstawowych predefiniowanych elementów, które są dostępne dla androida, ios, a także dla przeglądarek.

Jednak utworzenie aplikacji w React Native jest stroną kliencką czyli ``frontend``, aby zadbać o pełnoprawną aplikację należy również wprowadzić stronę serwerową (``backend``) np. za pomocą [🔗 ``Node.js``](https://nodejs.org/en/) i frameworka [🔗 ``Express.js``](https://expressjs.com/).

JavaScript jest bardzo łatwym językiem do rozpoczęcia nauki programowania, zwłaszcza że jest to język wysokiego poziomu, a do pisania kodu wystarczy tylko notatnik oraz przeglądarka - lub środowisko programistyczne [🔗 ``Visual Studio Code``](https://code.visualstudio.com/download).


## 🔖 Zmienne

  ### Co to jest zmienna?
  > Zmienne to coś w rodzaju "szufladek", w których pod nazwami możemy przechowywać różne rzeczy takie jak liczby, teksty, obiekty itp.

  ### Deklaracja zmiennej
  Aby zadeklarować zmienną, powinniśmy posłużyć się jednym ze słów kluczowych - ``let`` lub ``const``.
  
  Do stworzenia zmiennej w JavaScript przez lata używało się słowa kluczowego ``var``. 

  ```javascript
  var jakas_zmienna = "TEB Edukacja";
  var numer_w_dzienniku = 13;
  var url = "https://www.teb.pl/miasta/lublin/o-nas";

  console.log(jakas_zmienna + " - " + url);
  console.log(numer_w_dzienniku);
  ```

  Natomiast w momencie wypuszczenia ECMAScript 2015 zostały wprowadzone nowe sposoby deklaracji zmiennych za pomocą ``let`` oraz ``const``. Słowa te oznaczają kolejno - ``zmienną`` oraz ``stałą``.

  Tak jak już zostało powiedziane, zmienna to szufladka w pamięci komputera do której wkładamy jakieś informacje i przechowujemy je w niej, mogąc się odwołać do nich za pomocą ich nazwy. Natomiast stała to również rodzaj zmiennej, z tą różnicą, że nie może być nadpisana w trakcie działania programu.

  ```javascript
  let tekst = "Przykładowy tekst";
  tekst = "Inny tekst";

  const numer_w_dzienniku = 13;
  numer_w_dzienniku = 14;
  ```

## ✖️ Operatory
  Pisząc nasze skrypty nie raz i nie dwa będziemy wykonywać wiele równań.
  
  Część zapisów znamy z lekcji matematyki, natomiast w programowaniu pojawia nam się kilka specyficznych zapisów.

  ### Arytmetyczne
  > Czyli operatory służące do wykonywania operacji matematycznych na jakichś wartościach.
  ```javascript
  const x = 10;

  // dodawanie, odejmowanie, mnożenie, dzielenie
  console.log(x + 2); 
  console.log(x - 1); 
  console.log(x * 3); 
  console.log(x / 2); 

  // % - modulo czyli reszta z dzielenia
  console.log(x % 2); 
  console.log(x % 3); 

  // ** - potęgowanie
  console.log(x ** 2); 
  console.log(x ** 3);

  let y = 12;
  if (y % 2 === 0) {
      console.log(`Liczba ${y} jest parzysta`);
  }
  ```
  ### Przypisania
  > Czyli operatory, które służą do przypisania do zmiennej jakiejś wartości, pola, obiektu itp.

  ```javascript
  let a = 5;
  a += 3; // a = a + 3;
  a ++; // a = a + 1;
  console.log(a);
  
  let b = 5;
  b -= 3; // b = b - 3;
  b --; // b = b - 1;
  console.log(b);

  let c = 5;
  c *= 3; // c = c * 3;
  console.log(c);
  
  let d = 5;
  d -= 3; // d = d - 3;
  console.log(d);
  
  let e = 12;
  e /= 3; // e = e / 3;
  console.log(e); 
  
  let f = 11;
  f %= 3; // f = f % 3;
  console.log(f);
  ```
  
  ### Porównania
  > Możemy je znaleźć między innymi w instrukcjach warunkowych. Służą one do porównywania lewej strony równania do prawej, w wyniku której zawsze zwracana jest prawda albo fałsz.
  
  #### Operator ``==``
  > porównuje obie wartości bez porównania ich typów
  ```javascript
  const a = 10;
  console.log(a == 10) //true
  console.log(a == "10") //true
  ```

  #### Operator ``!=``
  > czy wartości są różne, bez sprawdzenia typu
  ```javascript
  const a = 10;
  console.log(a != 20) //true
  console.log(a != 10) //false
  console.log(a != "10") //false
  ```

  #### Operator ``===``
  > porównuje obie wartości i ich typ
  ```javascript
  const a = 10;
  console.log(a === 10) //false
  console.log(a === "10") //false
  ```

  #### Operator ``<`` i ``>``
  > porównuje obie wartości i sprawdza, która jest większa
  ```javascript
  const a = 10;
  const b = 20;
  console.log(a < 20) //true
  console.log(a < b) //true
  console.log(a > b) //false
  ```

## ❓ Instrukcje warunkowe
  
  ### Co to jest instrukcja warunkowa?
  > Instrukcja warunkowa to sprawdzenie danej zależności czy jest prawdziwa czy też nie. Czytana jest zazwyczaj ``"jeżeli x spełnia warunek to wykonaj"``.
  
  ### Deklaracja instrukcji warunkowej
  Instrukcja jest deklarowana za pomocą słowa kluczowego ``if``.

  ```javascript
  const liczba = Number( prompt("Podaj jakąś liczbę") );

  if (liczba > 20) { //jeżeli...
      console.log("Liczba jest większa od 20");
  } else{ //w przeciwnym razie...
      console.log("Liczba jest mniejsza lub równa 20");
  }
  ```

## 🧰 Funkcje
 
  ### Co to jest funkcja?
  > Funkcje to nic innego jak zmienne z grupą instrukcji wewnątrz, które możemy wywoływać przez podanie jej nazwy oraz ewentualnych argumentów. Każda funkcja po wywołaniu wykona kod zawarty w jej ciele.

  ### Deklaracja funkcji
  
  ```javascript
  function nazwa_funkcji(nazwa_argumentu){
    return nazwa_argumentu + 10
  }

  nazwa_funkcji("tekst :)")
  nazwa_funkcji(20)
  
  console.log(nazwa_funkcji)
  ```

  #### Argumenty
  > Dla każdej funkcji możemy utworzyć argumenty. To nic innego jak zmienne wykorzystywane w ciele funkcji, które można przypisać pod dowolne wartości podawane do funkcji.
  
  ```javascript
  function potrojne_mnozenie(a, b, c) {
      return a * b * c;
  }

  console.log( potrojne_mnozenie(2, 3, 4) );
  console.log( potrojne_mnozenie(10, 2, 10) );
  ```
  
  ```javascript
  function wlasciciel_zwierze(imie_wlasciciela, zwierze) {
      console.log(imie_wlasciciela + " ma " + zwierze);
  }

  wlasciciel_zwierze("Damian", "psa");
  wlasciciel_zwierze("Ala", "kota"); 
  ```

  #### Domyślne argumenty
  > Dla argumentów możemy też ustawiać domyślne wartości. Wystarczy po nazwie parametru ustawić mu domyślną wartość

  ```javascript
  function wlasciciel_zwierze(imie_wlasciciela = "Pawel", zwierze = "Orangutana") {
      console.log(imie_wlasciciela + " ma " + zwierze);
  }

  wlasciciel_zwierze("Ala", "kota"); 
  wlasciciel_zwierze();
  ```
  ### 🌟 Zadanie do wykonania
  1. Napisz funkcje, która dla zdefiniowanej szkolnej oceny (1,2,3,4,5,6) - zmienna ocena - zwróci jej słowny opis, np. "dostateczny".

  2. Napisz funkcje, która wykona potęgowanie danej liczby do wykładnika 10 (a^10).
  
  3. Napisz funkcję, która sprawdzi podaną liczbę i zwróci czy jest parzysta, czy nieparzysta.

  4. Napisz funkcję sprawdzającą bezpieczne hasło. Wymogi bezpiecznego hasła są następujące:
     - Conajmniej 1 litera od a do z 
     - Conajmniej 1 litera od A do Z.
     - Conajmniej 1 liczba od 0 do 9.
     - Conajmniej 1 znak ze znaków $,#,@
     - Minimalna długość 12 znaków
     - Maksymalna długość 16 znaków
  
     Funkcja ma zwracać True, jeśli hasło spełnia wymogi, a w przeciwnym wypadku False.


## ➰ Pętle

## 🔢 Tablice

## 🤖 Obiekty

## 🐋 Manipulacja DOM
