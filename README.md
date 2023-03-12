<div align="center">

# 🚀 Wprowadzenie do języka JavaScript 🚀

</div>

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

  Istnieje również skrócona wersja deklaracji, bardziej "podręczna"
  
  ```javascript
  liczba > 20 ? console.log("Liczba jest większa od 20") : ("Liczba jest mniejsza lub równa 20")
  ```

  ### Przełącznik (switch)
  Instrukcja ``switch`` jest kolejnym sposobem tworzenia warunków - tym razem na zasadzie przyrównania wyniku do konkretnych wartości. 

  Każdy przypadek kończy się słowem ``break``, które kończy wykonywanie instrukcji switch.

  > Jeżeli pominiemy to słowo, wtedy nawet przy pomyślnym przyrównaniu zostaną wykonane kolejne sprawdzenia, co często może powodować błędy.

  Dodatkowo instrukcja switch ma specjalny przypadek ``default`` który będzie wybierany, gdy wszystkie inne przypadki będą błędne (odpowiednik else w instrukcji if).

  ```javascript
  const zwierze = prompt("Wpisz jakiego masz zwierzaka: ");

  switch (zwierze) {
    case "pies":
        console.log("Psy są najlepsze");
        break;
    case "kot":
        console.log("Koty są lepsze od psów");
        break;
    case "chomik":
        console.log("Każdy chomik jest super");
        break;
    default:
        console.log("Jakiś dziwny ten zwierzak");
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
  Pętlę w programowaniu pozwalają nam wykonywać dany kod zadaną ilość razy.

  ### Pętla ``for``
  Ten rodzaj pętli wykorzystuje 3 argumenty, pierwszy z nich to zmienna wykorzystywana w ciele pętli. Następna to warunek kończący wykonanie pętli, oraz ewentualna modyfikacja zmiennej zainicjowanej.

  ```javascript
  for(let i = 0; i < 1000; i++){
    console.log(`Przykładowy tekst wyświetlony ${i+1} razy`)
  }
  ```

  ### Pętla ``while``
  Pętla while (dopóki) to kolejny typ pętli, który można spotkać w wielu językach. Pętlę te zazwyczaj stosuje się w sytuacjach, kiedy nie wiemy dokładnie, ile iteracji (powtórzeń) ma się wykonać.
  
  Struktura tej pętli ma następującą postać: 
  ```javascript
  let i = 1;

  while (i <= 100) {
      console.log("Wykonanie pętli nr. "+i);
      i++;
  }
  ```
  Jeżeli w powyższym kodzie pętli nie zwiększalibyśmy zmiennej ``i``, wówczas pętla ta wykonywała by się w nieskończoność. 

  ### Pętla ``do while``
  Istnieje również nieco odwrotna wersja pętli ``while`` - ``do while``. Tłumacząc to można zauważyć, że najpierw zostaje wykonane działanie, a dopiero na samym końcu sprawdzany warunek czy został spełniony.

  ```javascript
  let i = 1;

  do {
      i++;
      console.log("Wykonanie pętli nr. "+i);
  } while (i <= 100);
  ```

  Na powyższym przykładzie console.log wykonał się 101 razy, z tego powodu, że przy 100 iteracji wykonał się ponownie i dopiero wtedy zostało zakomunikowane, że przekroczył warunek.


## 🔢 Tablice

  ### Co to jest tablica?
  Jest to uporządkowany zbior danych dowolnego typu, tablicę można wyobrazić sobie za pomocą półki bibliotecznej, która przechowuje zbiór książek, które oznaczone są kolejno cyframi od 0 do n-tej książki.

  ### Deklaracja tablicy
  Aby stworzyć nową tablicę należy zastosować nawiasy kwadratowe ``[]``, dobrze jest również przypisać ją do zmiennej lub stałej w zależności od potrzeb.

  ```javascript
  const tablica = [1,2,3,4,5]
  console.log(tablica[2])
  ```
  
  Natomiast by odwołać się do elementu, należy w nawiasach kwadratowych wprowadzić indeks danego elementu.

  Tablicę również można utworzyć za pomocą konstruktora, natomiast w sposób zaprezentowany poniżej, utworzona tablica będzie wewnątrz pusta. Jednak z zadeklarowaną wielkością 5.
  ```javascript
  const tablica = new Array(5)
  console.log(tablica)
  ```

  ### Właściwości tablic
  Tablice są obiektami, które mają określone swoje metody. Dzięki nim możliwa jest manipulacja danymi wewnątrz, czy chociażby odczytywanie informacji o tablicach.

<div align="center">

  | Właściwość | Opis |
  |:---:|:---:|
  |length | Zwraca długość tablicy |
  |concat(tab1, tab2) | Zwraca nową tablicę po przez dodanie dwóch tablic do siebie |
  |includes() | Metoda służąca do wyszukiwania konkretnego słowa w ciągu znaków|
  |join() | Podobne działania jak toString, jednak można zdefiniować separator |
  |slice() | Dzieli tablicę na poszczególne elementy |
  |sort() | Sortuje tablicę według przekazanej w parametrze funkcji |
  |reverse() | Odwraca kolejność elementów w tablicy|
  |push() | "wpycha" element do tablicy na sam koniec |
  |pop() | "wypycha" czyli usuwa ostatni element tablicy |

</div>

  #### Sortowanie tablic
  Metoda sort() przyjmuje jako parametr funkcję porównującą.
  Cały sens tej funkcji oparty jest na zdefiniowaniu alternatywnej wersji sortowania.

  ##### Wyjaśnienie
  Kiedy metoda sort() porównuje dwie wartości, to wysyła je do funkcji porównującej i sortuje wartości w zależności jaka wartość została zwrócona (może być ujemna, zero lub dodatnia).

  ``Jeżeli wynik jest ujemny, zmienna a jest umiejscowiona przed b.``

  ``Jeżeli wynik jest dodatni, zmienna b jest umiejscowiona przed a.``

  ``Jeżeli wynik jest równy 0, żadne zmiany nie zachodzą pomiędzy dwoma wartościami z tablicy.``

  ```javascript
  const tablica = [1,10,12,3,41,-12]
  tablica.sort((a,b) => {return a - b})
  ```
  Powyższy przykład sortowania będzie wyglądał następująco:

  1. Wartości 1 i 10 zostaną przypisane do a i b.
  2. Funkcja porównująca zwróci wynik odejmowania dwóch wartości
  3. 1 - 10 = wynik ujemny, czyli wartość a jest umiejscowiona przed b, czyli a jest mniejsza od b.
  4. Krok 1-3 jest powtarzany dla kolejnych elementów.

  ### Syntaktyka spread
  Jest to nowy zapis, który umożliwia rozbijanie iterowanej wartości na składowe. Zapis odbywa się za pomocą ``...``

  Może nią być string (składowe to litery), może to być tablica (składowe to elementy), mogą to być kolekcje czy nawet obiekty (składowe to właściwości).

  ```javascript
  // Rozłożenie tablicy na składowe
  const tablica = [1, 2, 3, 4];
  console.log(...tablica); //1, 2, 3, 4

  // Wykonanie kopii tablicy.
  const skopiowana_tablica = [...tablica];

  // Łączenie dwóch tablic
  const jakas_tablica = [3, 4]
  const polaczona_tablia = [1, 2, ...jakas_tablica, 5, 6]; //[1, 2, 3, 4, 5, 6]
  ```

  Operator ten może być również zastosowany jako tablica argumentów

  ```javascript
  function wlasciciel_zwierze(imie_wlasciciela = "Tomek", ...zwierzeta) {
      console.log("To jest " + imie_wlasciciela);

      if (zwierzeta.length) {
          console.log(`${imie_wlasciciela} ma zwierzaki: ${zwierzeta.join()}`);
      }
  }

  printAbout("Paweł", "orangutan", "hipopotam");
  printAbout();
  ```

  ### Pętle na tablicach
  Tablice czy inne zbiory "iterowalne" posiadają możliwość specjalnych pętli, poza oczywiście normalnymi (while oraz for), zarezerowanych właśnie dla nich.

  #### for..of
  Jest to znacznie wygodniejsza pętla w stosunku do zwykłej pętli for, która automatycznie iteruje po każdym z elementów.

  ```javascript
  const tablica = [1,2,3,"Test","Orangutan"]

  for (const element of tablica){
    console.log(element)
  }
  ```

  ### Funkcja iterująca ``forEach``
  Funkcja przypisana do każdego iterowalnego zbioru wartości, stosuje się ją w nieco inny sposób jak zwykła pętlę.

  Jako argument przyjmuje funkcję, w której możemy przypisać tymczasową nazwę elementu i dowolnie go manipulować.

  ```javascript
  const tablica = [1,2,3]
  tablica.forEach((element) => {
    console.log(element**2)
  })
  ```

  ### Funkcja iterująca ``map``
  >Kolejna funkcja podobna do forEach, jednak ze znaczącą różnicą. 
  
  Funkcja ``forEach`` iteruje po zbiorze danych i aplikuje jakieś operacje dla każdego elementu zbioru i nie zwraca żadnej zawartości.
  
  Po drugiej stronie ``map`` iteruje po zbiorze danych, przekształca każdy element zbioru i zwraca kolejny zbiór z taką samą wielkością i zmodyfikowanym zbiorem elementów. Nie zmienia zbioru na którym operuje.

  > W obu przypadkach zainicjowana tablica nie zostaje zmodyfikowana, jednakże może zostać zmodyfikowana przez funkcję wywołaną wewnątrz pętli iterującej.
  
  ```javascript
  const tablica_forEach = [1,2,3,4]
  const tablica_map = [1,2,3,4]

  // Zastosowanie forEach()
  const tablica_forEachowana = tablica_forEach.forEach((x) => {
    return x**2
  })

  // Zastosowanie map()
  const tablica_zmappowana = tablica_map.map((x)=>{
    return x**2
  })

  console.log(`Tablica_forEach:${tablica_forEach}\nTablica_forEachowana:${tablica_forEachowana}`)

  console.log(`Tablica_map:${tablica_map}\nTablica_zmappowana:${tablica_zmappowana}`)
  ```

  ### 🌟 Zadania do wykonania

  1. Wypisz liczby od 1 do 100, przy czym liczby podzielne przez ``3`` zastąp słowem ``Fizz``, liczby podzielne przez ``5``, zastąp słowem ``Buzz``, natomiast liczby podzielne i przez ``3 i przez 5`` zastąp słowem ``FizzBuzz``. A w rezultacie, powinniśmy otrzymać – 1, 2, Fizz, 4, Buzz, 6, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16 itd.

  1. Napisz funkcję która posortuje elementy tablicy (od największego do najmniejszego) i wszelkie występujące w niej wartości ``0`` zastąpi liczbą ``1``.

  2. Napisz funkcję która usuwa następujące wyrażenia z tablicy: ``null``, ``0``, ``false``, ``true``, ``undefined`` oraz ``NaN``.
     - Jako argument musi przyjąć tablicę do "oczyszczenia"
     - Dla ułatwienia wykorzystaj przedstawioną tablicę

        ```javascript
        const przykladowa_tablica = [NaN, 0, true, 1, false, -21, '',undefined, 37, null]
        ```

  3. Napisz funkcję rozszerzającą podaną tablicę przez dopełnienie jej liczbą ``0``.
     - Przykładowo jeśli tablica ma ``3 elementy``, to zadaniem funkcji będzie rozszerzenie tablicy do ``n-elementów``, które zostaną określone w parametrze.
  
  4. Napisz funkcję, która zlicza powtórzenia liczb występujące w podanej tablicy i wyświetla je.
     - Zmodyfikuj zadanie w następujący sposób:
       - Dodaj funkcjonalność do funkcji w postaci oczyszczenia tablicy z powtarzających się wartości zaraz po wyświetleniu ich i zwróć oczyszczoną tablicę.

  5. Napisz funkcję, która przyjmie 4 różne (liczbowe) tablicę i zwróci tablicę, której suma wszystkich elementów jest największa.
  
## 🤖 Obiekty

  ### Co to jest obiekt?
  Obiekty jest czymś w rodzaju stworzonej przez nas rzeczy, najlepiej przyrównać można to do człowieka, który jest jakimś obiektem i ma swoje właściwości oraz funkcjonalności (metody).
  Człowiek ten ma swój określony wiek, imie, wysokość, a także metody takie jak chociażby oddychanie, chodzenie, mówienie.

  ### Deklaracja obiektu
  W języku JavaScript zadeklarować obiekt można na kilka różnych sposobów, najczęściej stosowanym jest skrócony zapis

  ```javascript
  const czlowiek = {
      imie: "Damian",
      wiek: 24,
      wytlumaczZagadnienie: function() {
          return "Tym właśnie jest obiekt, jestem żywym przykładem.";
      }
  }
  ```

  ### Odwoływanie się do właściwości i metod
  By móc odwołać się do własciwości czy metod, są na to dwa sposoby

  ```javascript
  const czlowiek = {
      imie: "Damian",
      wiek: 24,
      wytlumaczZagadnienie: function() {
          return "Tym właśnie jest obiekt, jestem żywym przykładem.";
      }
  }

  czlowiek.imie; // Damian
  czlowiek.wiek; // 24
  czlowiek.wytlumaczZagadnienie() // Tym właśnie jest obiekt, jestem żywym przykładem.

  // Lub drugi sposob

  czlowiek.["imie"];
  czlowiek.["wiek"];
  czlowiek.["wytlumaczZagadnienie"]();
  ```

  Jednak w tym przypadku i jedna i druga wersja ma swoje zastosowanie, pierwsza jest jednak wygodniejsza, ale.. nie możemy nią zapisać chociażby notacji daty.

  ```javascript
  const obiekt_z_data = {
    "12.03.2023": "Pienkna niedziela!"
  }

  obiekt_z_data.12.03.2023 // Błędnie
  obiekt_z_data["12.03.2023"] // Poprawnie
  ```

  #### Sposób destrukturyzacji
  Aby zwrócić konkretną ilość danych możemy zastosować zapis destrukturyzacji i zwrócić informacje o następującej nazwie.

  > W przypadku gdy chcemy zastosować nową nazwę dla wyjętej właściwości obiektu należy podać je po dwukropku.

  ```javascript
  const czlowiek = {
      imie: "Damian",
      wiek: 24,
      wytlumaczZagadnienie: function() {
          return "Tym właśnie jest obiekt, jestem żywym przykładem.";
      }
  }

  const {imie, wiek} = czlowiek;

  const {
    imie : nowe_imie = "",
    wiek : nowy_wiek = 0,
  } = czlowiek;

  console.log(`${imie}, ${wiek} ->\t ${nowe_imie}, ${nowy_wiek}`)
  ```
  Skraca to znacząco zapis niż by każdą po koleii właściwość wypisywać. Podobne zastosowanie możemy użyć w stosunku do ``tablic``.

  Aby zdestrukturyzować chociażby obiekt możemy również użyć takiego zapisu

  ```javascript
  function wypiszMnie({imie, wiek}) {
      console.log(imie);
      console.log(wiek);
  }

  const ja = {
      imie : "Damian",
      wiek : 24
  }
  wypiszMnie(ja);
  ```

  ### Dodawanie nowych właściwości
  
  ```javascript
  const czlowiek = {
      imie: "Damian",
      wiek: 24,
      wytlumaczZagadnienie: function() {
          return "Tym właśnie jest obiekt, jestem żywym przykładem.";
      }
  }

  czlowiek.wzrost = {
    jednostka: "cm",
    ilosc: 179
  }
  czlowiek.wpiszPiatke = function () {
    console.log("Piątka wpisana!")
    return 5
  }
  ```
  ### Usuwanie właściwości
  Usuwanie właściwości czy metod zastosowane jest za pomocą słówka kluczowego ``delete``, jednakże należy dokładnie określić co chcemy usunąć.
  ```javascript
  const czlowiek = {
      imie: "Damian",
      wiek: 24,
      wytlumaczZagadnienie: function() {
          return "Tym właśnie jest obiekt, jestem żywym przykładem.";
      }
  }

  delete czlowiek.wiek
  ```

  ### Iterowanie po obiekcie
  W przypadku gdy chcemy przeiterować po jakimś obiekcie nie koniecznie musimy wiedzieć ile ma właściwości, więc wykorzystujemy do tego pętlę ``for..in``, pętlę podobną do ``for..of``.

  Aby zastosowac wyswietlenie wartości konkretnej właściwości należy użyć odwołania do całego obiektu i konkretnie iterowanej właściwości, co robimy za pomocą nawiasów kwadratowych. Jest to kolejny przykład użyteczności tej notacji.

  ```javascript
  const czlowiek = {
      imie: "Damian",
      wiek: 24,
      wytlumaczZagadnienie: function() {
          return "Tym właśnie jest obiekt, jestem żywym przykładem.";
      }
  }

  for (const wlasciwosc in czlowiek){
    console.log(`Właściwość: ${wlasciwosc}`)
    console.log(`Wartość właściwości: ${czlowiek[wlasciwosc]}`)
  }
  ```

  Do zapewnienia pewności iteracji tylko i wyłącznie po kluczach danego obiektu możemy posiłkować się metodą ``hasOwnProperty()``

  ```javascript
  const czlowiek = {
      imie: "Damian",
      wiek: 24,
      wytlumaczZagadnienie: function() {
          return "Tym właśnie jest obiekt, jestem żywym przykładem.";
      }
  }

  for (const wlasciwosc in czlowiek){
    if(czlowiek.hasOwnProperty(wlasciwosc)){
      console.log(`Właściwość: ${wlasciwosc}`)
    }
  }
  ```

  ### Odwołanie ``this``
  Aby odwoływać się do konkretnego obiektu, zostało wprowadzone słowo kluczowe ``this``, służące właśnie do tego celu. Odwołuje się do konkretnego obiektu do którego należy dana właściwość czy metoda.
  
  ```javascript
  const czlowiek = {
      imie: "Damian",
      wiek: 24,
      wytlumaczZagadnienie: function() {
          return "Tym właśnie jest obiekt, jestem żywym przykładem.";
      },
      wypiszWiek: function (){
        console.log(`Oto mój wiek: ${this.wiek}`)
      }
  }

  czlowiek.wypiszWiek()
  ```

  ### Kopiowanie obiektu
  Metodami ``spread`` oraz ``assign`` możemy kopiować obiekty, ale na poziomie "płaskim", czyli takim w którym nie występują kolejne zagłębienia w obiekty znajdujące się w obiektach.
  
  ``Assign``
  ```javascript
  const a = {
      imie : "kot",
      wiek: 7,
      czyGlodny: true
  }

  const b = {
      imie : "pies",
      wiek : 5
  }

  const c = Object.assign({}, a, b);

  console.log(c); //{imie : "pies", wiek: 5, czyGlodny: true}
  ```
  ``Spread``
  ```javascript
    const a = {
        imie : "kot",
        wiek: 7,
        czyGlodny: true
    }

    const b = {
        imie : "pies",
        wiek : 5
    }

    const c = {...a, ...b}

    console.log(c); //{imie : "pies", wiek: 5, czyGlodny: true}
  ```

  Natomiast aby kopiować obiekty, które posiadają bardziej rozbudowaną strukturę możemy wykorzystać obiekt notacji JSON.

  ```javascript
  const obiekt = {
      imie : "Damian",
      zwierze : {
          imie : "Orange",
          wiek : 3,
          rodzaj: "pies"
      }
  }

  const obiekt2 = JSON.parse(JSON.stringify(obiekt));

  obiekt2.pet.name = "Blue";
  obiekt2.pet.kind = "kot";

  console.log(obiekt.pet.name, obiekt2.pet.name); 
  console.log(obiekt.pet.kind, obiekt2.pet.kind);
  ```
  
  > Po więcej sposobów kopiowania rozwiniętych struktur obiektów zapraszam na [🔗 artykuł lodash](https://lodash.com/docs/4.17.15#cloneDeep)


  ### Tworzenie własnego obiektu
  Aby utworzyć własny obiekt, musimy posiadać ``konstruktor`` - czyli funkcję, która domyślnie na podstawie podanych do niej informacji utworzy nam obiekt. W języku JavaScript jest to uproszczone najbardziej jak się da, bo jest to praktycznie funkcja. Różnicą jest to, że nie możemy użyć funkcji strzałkowej, a także nazwa tej funkcji musi być z dużej litery.

  > Warto zawuażyć, że w JavaScript możemy ponadto utworzyć "pełneprawne" klasy do tworzenia własnego typu.


  Wywołanie nowego obiektu na podstawie naszego ``konstruktora`` odbywa się za pomocą słowa kluczowego ``new``.
  ```javascript
  function Zwierze(imie,wiek,szybkosc){
    this.imie = imie
    this.wiek = wiek
    this.szybkosc = szybkosc

    this.wypiszInformacje = function (){
      console.log(`To jest zwierze: ${this.imie}, ma lat: ${this.wiek} i pędzi z prędkością: ${this.szybkosc}`)
    }
  }

  const pies = new Zwierze("Diana", 14, 12.3)
  pies.wypiszInformacje()
  ```

  ### 🌟 Zadania do wykonania
  
  1. Napisz metodę, która wypisze wszystkie informacje o obiekcie.

  2. Utwórz nowy konstruktor i stwórz 3 obiekty według niego, następnie wstaw obiekty do tablicy i posortuj je, wyświetl wynik sortowania.

  3. Stwórz konstruktor ``Sorter`` w którym utworzysz metodę ``sortowania bąbelkowego``, utwórz obiekt na jego podstawie i zastosuj zaimplementowaną metode.

## 🐋 Manipulacja DOM
