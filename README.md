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

  | Właściwość / Metoda | Opis |
  |:---:|:---:|
  | length | Zwraca długość tablicy |
  | concat(tab1, tab2) | Zwraca nową tablicę po przez dodanie dwóch tablic do siebie |
  | includes() | Metoda służąca do wyszukiwania konkretnego słowa w ciągu znaków|
  | join() | Podobne działania jak toString, jednak można zdefiniować separator |
  | slice() | Dzieli tablicę na poszczególne elementy |
  | sort() | Sortuje tablicę według przekazanej w parametrze funkcji |
  | reverse() | Odwraca kolejność elementów w tablicy|
  | push() | "wpycha" element do tablicy na sam koniec |
  | pop() | "wypycha" czyli usuwa ostatni element tablicy |
  | reduce() | Wykonuje funkcję zwrotną na każdym elemencie tablicy, zwracając jedną wartość wynikową |
  | filter() | Tworzy nową tablicę z wszystkimi elementami, które spełniają warunek podany w funkcji zwrotnej|
  | findIndex() | Zwraca indeks pierwszego elementu w tablicy, który spełnia warunek podany w funkcji zwrotnej. |
  | find() | Zwraca wartość pierwszego elementu w tablicy, który spełnia warunek podany w funkcji zwrotnej.|
  | some() | Zwraca wartość logiczną ``true``, jeśli co najmniej jeden element w tablicy przechodzi test określony w funkcji zwrotnej.|
  | every() | Zwraca wartość logiczną true, jeśli każdy element w tablicy przechodzi test określony w funkcji zwrotnej.|

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

  wlasciciel_zwierze("Paweł", "orangutan", "hipopotam");
  wlasciciel_zwierze();
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

      <details> 
      <summary>🌠 Wskazówka</summary>
      <p>

      > Aby zliczyć powtórzenia liczb w tablicy i wyświetlić ich ilość, można użyć jednej z pętli do iteracji po tablicy, a następnie przechowywać informacje o liczbie wystąpień każdej liczby w obiekcie lub tablicy. Podczas iteracji po tablicy, dla każdej liczby można sprawdzić, czy już wystąpiła wcześniej i w zależności od tego, zwiększyć jej liczbę wystąpień lub dodać ją jako nowy klucz/wartość do obiektu/tablicy. Na końcu wystarczy wyświetlić informacje o liczbie wystąpień każdej liczby.
      
      </p>
      </details>

  5. Napisz funkcję, która przyjmie 4 różne (liczbowe) tablicę i zwróci tablicę, której suma wszystkich elementów jest największa.

      <details>
      <summary>🌠 Wskazówka</summary>  
      <p>
      
      > Można zastosować prostą pętlę for w celu przejścia przez elementy wszystkich tablic, sumowania ich wartości i porównywania tych sum, aby znaleźć tablicę o największej sumie.

      - Stwórz zmienną przechowującą sumę wartości, które zostaną obliczone dla każdej z czterech tablic.
      - Przejdź przez każdą z czterech tablic w jednej pętli for.
      - Zsumuj wartości w każdej iteracji i porównaj z sumą dotychczasowej tablicy.
      - Przypisz indeks tablicy z największą sumą do zmiennej i zwróć tablicę o tym indeksie.

      </p>
      </details>

      <details>
      <summary>Przykładowy wynik zadania</summary>
      <p>
      
      ```javascript
      var arr1 = [1, 2, 3, 4, 5];
      var arr2 = [6, 7, 8, 9, 10];
      var arr3 = [11, 12, 13, 14, 15];
      var arr4 = [16, 17, 18, 19, 20];

      var result = findMaxSumArray(arr1, arr2, arr3, arr4);

      console.log(result); // [16, 17, 18, 19, 20]
      ```

      </p>
      </details>
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

  2. Utwórz nowy konstruktor ``Persons`` i stwórz 3 obiekty według niego (niech posiadają imie oraz wiek), następnie wstaw obiekty do tablicy i posortuj je, wyświetl wynik sortowania (metoda sort()).

  3. Stwórz konstruktor ``Sorter`` w którym utworzysz metodę ``sortowania bąbelkowego``, utwórz obiekt na jego podstawie i zastosuj zaimplementowaną metode.

      <details>
      <summary>🌠 Wskazówka</summary>
      <p>

      > Należy napisać konstruktor JavaScript o nazwie "Sorter", który będzie zawierał metodę sortowania bąbelkowego. Metoda sortowania bąbelkowego jest jednym z najprostszych algorytmów sortowania, który polega na porównywaniu sąsiednich elementów w tablicy i zamienianiu ich kolejności, jeśli są w niewłaściwej kolejności. Następnie powtarza się ten proces dla kolejnych par elementów aż do uzyskania posortowanej tablicy. Po napisaniu konstruktora, należy utworzyć obiekt na jego podstawie i wywołać metodę sortowania bąbelkowego dla wybranej tablicy. Wynik sortowania należy wyświetlić w konsoli lub na stronie HTML.

      </p>
      </details>
      <details>
      <summary>Przykładowy wynik zadania</summary>
      <p>

      ```javascript
      let sorter = new Sorter([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
      console.log("Przed sortowaniem: " + sorter.array);
      // Przed sortowaniem: [3,1,4,1,5,9,2,6,5,3,5]
      sorter.bubbleSort();
      console.log("Po sortowaniu: " + sorter.array);
      // Po sortowaniu: [1,1,2,3,3,4,5,5,5,6,9]
      ```
      
      </p>
      </details>


## 🐋 Manipulacja DOM
Manipulacja elementami DOM w JavaScript jest kluczowym aspektem tworzenia interaktywnych stron internetowych. Poniżej zostały przedstawione podstawowe informacje na temat manipulacji elementami DOM.

### 📥 Pobieranie elementów DOM
  Do pobierania elementów DOM można użyć różnych metod. Najczęściej używaną metodą jest metoda ``getElementById()``, która pobiera element na podstawie jego identyfikatora. Innymi popularnymi metodami są ``getElementsByClassName()`` oraz ``getElementsByTagName()``, a także ``querySelector()``.

  #### getElementById()

  Metoda ``getElementById()`` jest najczęściej używaną metodą do pobierania elementów DOM w JavaScript. Metoda ta zwraca element na podstawie jego identyfikatora, który jest unikalny dla każdego elementu na stronie. 
  
  > Przykładowe zastosowanie metody ``getElementById()`` to:

  ```javascript
  const element = document.getElementById("myElement");
  element.style.color = "red";
  ```

  #### getElementsByClassName()

  Metoda ``getElementsByClassName()`` zwraca tablicę elementów, które posiadają daną klasę. Metoda ta może zwrócić wiele elementów, które mają tę samą klasę. 
  
  > Przykładowe zastosowanie metody ``getElementsByClassName()`` to:

  ```javascript
  const elements = document.getElementsByClassName("myClass");
  for(let i = 0; i < elements.length; i++){
    elements[i].style.backgroundColor = "blue";
  }
  ```
    
  #### getElementsByTagName()

  Metoda ``getElementsByTagName()`` zwraca tablicę elementów, które posiadają daną nazwę tagu. Metoda ta może zwrócić wiele elementów, które mają ten sam tag.
  
  > Przykładowe zastosowanie metody ``getElementsByTagName()`` to:

  ```javascript
  const elements = document.getElementsByTagName("p");
  for(let i = 0; i < elements.length; i++){
    elements[i].classList.add("newClass");
  }
  ```
  
  #### querySelector()

  Metoda ``querySelector()`` zwraca pierwszy element, który odpowiada danemu selektorowi CSS. 
  
  > Przykładowe zastosowanie metody ``querySelector()`` to:
  ```javascript
  const element = document.querySelector(".myClass > span");
  element.innerHTML = "New text";
  ```

  #### querySelectorAll()

  Metoda ``querySelectorAll()`` zwraca wszystkie elementy, które odpowiadają danemu selektorowi CSS.
  
  > Przykładowe zastosowanie metody ``querySelectorAll()`` to:

  ```javascript
  const elements = document.querySelectorAll("a[href='http']");
  for(let i = 0; i < elements.length; i++){
    elements[i].target = "_blank";
  }
  ```

  #### parentElement

  W niektórych przypadkach, gdy potrzebujemy pobrać element nadrzędny, możemy użyć właściwości ``parentElement``. 
  
  > Przykładowe zastosowanie właściwości ``parentElement`` to:

  ```javascript
  const child = document.getElementById("myChildElement");
  const parent = child.parentElement;
  parent.style.border = "1px solid black";
  ```

  > Podsumowując, pobieranie elementów DOM jest niezbędne w procesie tworzenia interaktywnych stron internetowych. W JavaScript, mamy wiele metod, które pozwalają na dostęp do każdego elementu na stronie. Metody te umożliwiają wybór elementów na podstawie identyfikatora, klasy, nazwy tagu oraz selektora CSS. Znajomość tych metod jest kluczowa w programowaniu stron internetowych, ponieważ pozwala na manipulowanie elementami DOM w celu uzyskania pożądanych efektów wizualnych i funkcjonalnych.

### 📝 Manipulacja treścią elementów
  Aby zmienić treść elementu, można użyć właściwości ``innerHTML`` lub ``textContent``. Właściwość ``innerHTML`` pozwala na manipulowanie zawartością elementu w formie kodu HTML, natomiast ``textContent`` pozwala na manipulowanie zawartością elementu w formie zwykłego tekstu.

  #### Właściwość innerHTML

  Właściwość ``innerHTML`` pozwala na manipulowanie zawartością elementu w formie kodu HTML. Właściwość ta zwraca lub ustawia treść elementu, a także wszystkie elementy podrzędne. 
  
  Przykładowo, mając element 
  ``<div id="myDiv">Hello World</div>`` można użyć ``innerHTML`` w następujący sposób:

  ```javascript
  const myDiv = document.getElementById("myDiv");
  myDiv.innerHTML = "Hello <b>JavaScript</b> World";
  ```

  W powyższym przykładzie, tekst "Hello World" został zastąpiony przez ``"Hello <b>JavaScript</b> World"``, co spowoduje, że słowo "JavaScript" zostanie pogrubione w wyświetlanym tekście.

  Właściwość ``innerHTML`` może być również użyta do dodawania lub usuwania elementów. Na przykład, aby dodać nowy element do elementu ``<div>``, można użyć:

  ```javascript
  myDiv.innerHTML += "<p>New paragraph</p>";
  ```
  W powyższym przykładzie, dodany zostanie nowy element 
  ```html
  <p>New paragraph</p> 
  ```
  do elementu 
  ```html
  <div id="myDiv">
  ```
  #### Właściwość textContent

  Właściwość textContent pozwala na manipulowanie zawartością elementu w formie zwykłego tekstu. Właściwość ta zwraca lub ustawia tekst elementu, a wszystkie znaczniki HTML zostaną zignorowane. Na przykład, mając element 
  ```html
  <p id="myP">Hello <b>JavaScript</b> World</p>
  ```
  można użyć ``textContent`` w następujący sposób:

  ```javascript
  const myP = document.getElementById("myP");
  myP.textContent = "Hello JavaScript World";
  ```

  W powyższym przykładzie, tekst ``"Hello <b>JavaScript</b> World"`` zostanie zastąpiony przez "Hello JavaScript World", co spowoduje, że słowo "JavaScript" ``nie będzie pogrubione`` w wyświetlanym tekście.

  Właściwość ``textContent`` jest często używana do pobierania tekstu z elementów. Na przykład, mając element:
  
  ```html
  <p id="myP">Hello JavaScript World</p>
  ```

  można użyć ``textContent`` w następujący sposób, aby uzyskać tekst elementu:

  ```javascript
  const myP = document.getElementById("myP");
  const text = myP.textContent;
  console.log(text); // "Hello JavaScript World"
  ```

  Właściwość textContent jest przydatna do ustawienia wartości tekstowej formularza lub do manipulowania tekstem w tabelach. W przeciwieństwie do ``innerHTML``, nie pozwala na dodawanie lub usuwanie elementów, ale jest znacznie bezpieczniejsza w stosowaniu, ponieważ ``wszystkie znaczniki HTML są ignorowane``, a tekst jest renderowany dokładnie.

### 🆕 Dodawanie i usuwanie elementów
  Aby dodać nowy element do strony, należy utworzyć nowy element za pomocą metody ``createElement()`` i dodać go do drzewa DOM za pomocą metody ``appendChild()``. Aby usunąć element, można użyć metody ``removeChild()``.

  #### Metoda createElement()

  Metoda ``createElement()`` służy do tworzenia nowych elementów w DOM. Metoda ta przyjmuje jeden argument - nazwę tagu elementu. Na przykład, aby utworzyć nowy element ``<p>``, można użyć:

  ```javascript
  const newParagraph = document.createElement("p");
  ```
  Nowy element ``<p>`` zostanie utworzony, ale nie zostanie dodany do strony.

  #### Metoda appendChild()

  Metoda ``appendChild()`` służy do dodawania nowych elementów do drzewa DOM. Metoda ta przyjmuje jeden argument - nowy element, który ma zostać dodany do drzewa DOM. Na przykład, aby dodać nowy element ``<p>`` do elementu ``<div>``, można użyć:

  ```javascript
  const newParagraph = document.createElement("p");
  const myDiv = document.getElementById("myDiv");
  myDiv.appendChild(newParagraph);
  ```

  W powyższym przykładzie, utworzony został nowy element ``<p>``, a następnie został dodany do elementu ``<div>`` o identyfikatorze ``myDiv``. Nowy element zostanie dodany jako ostatnie dziecko elementu ``<div>``.
  
  #### Metoda removeChild()

  Metoda ``removeChild()`` służy do usuwania elementów z drzewa DOM. Metoda ta przyjmuje ``jeden argument - element``, który ma zostać usunięty z drzewa DOM. Na przykład, aby usunąć element ``<p>`` z elementu ``<div>``, można użyć:

  ```javascript
  const myDiv = document.getElementById("myDiv");
  const paragraphToRemove = myDiv.querySelector("p");
  myDiv.removeChild(paragraphToRemove);
  ```

  W powyższym przykładzie, został pobrany element ``<p>`` z elementu ``<div>``, a następnie został usunięty z drzewa DOM.

  Metoda ``removeChild()`` jest szczególnie przydatna do dynamicznej modyfikacji strony internetowej, w której elementy muszą być dodawane i usuwane w zależności od akcji użytkownika.

### 🧱 Manipulacja atrybutami elementów
  Atrybuty elementów HTML to dodatkowe informacje, które można dodać do elementów HTML w celu określenia ich wyglądu, funkcjonalności i innych właściwości. Aby dodać lub zmienić atrybuty elementów DOM, można użyć metody ``setAttribute()``.

  #### Metoda setAttribute()

  Metoda ``setAttribute()`` służy do ustawiania wartości atrybutu elementu. Metoda ta przyjmuje dwa argumenty: nazwę atrybutu i wartość atrybutu. 
  
  Na przykład, aby dodać atrybut class do elementu ``<p>``, można użyć:

  ```javascript
  const myParagraph = document.createElement("p");
  myParagraph.setAttribute("class", "my-class");
  ```

  W powyższym przykładzie, został utworzony nowy element ``<p>`` i do niego został dodany atrybut class o wartości ``my-class``.

  Metoda ``setAttribute()`` jest również przydatna, gdy chcemy zmienić wartość istniejącego atrybutu. 
  
  Na przykład, aby zmienić wartość atrybutu class dla elementu ``<p>``, można użyć:

  ```javascript
  const myParagraph = document.getElementById("my-paragraph");
  myParagraph.setAttribute("class", "new-class");
  ```

  W powyższym przykładzie, został pobrany element ``<p>`` o identyfikatorze ``my-paragraph``, a następnie została zmieniona wartość atrybutu class na ``new-class``.

  #### Metoda getAttribute()

  Metoda ``getAttribute()`` służy do pobierania wartości atrybutu elementu. Metoda ta przyjmuje ``jeden argument - nazwę atrybutu``, którego wartość chcemy pobrać. 
  
  Na przykład, aby pobrać wartość atrybutu class dla elementu ``<p>``, można użyć:

  ```javascript
  const myParagraph = document.getElementById("my-paragraph");
  const paragraphClass = myParagraph.getAttribute("class");
  ```
  W powyższym przykładzie, został pobrany element ``<p>`` o identyfikatorze ``my-paragraph``, a następnie została pobrana wartość atrybutu class. Wartość ta zostanie zapisana w zmiennej ``paragraphClass``.

  Metoda ``getAttribute()`` może być również użyta do pobrania wartości innych atrybutów, takich jak ``id``, ``href``, ``src``, itp.

  Manipulowanie atrybutami elementów HTML za pomocą ``setAttribute()`` i ``getAttribute()`` jest często wykorzystywane przy tworzeniu stron internetowych i aplikacji internetowych. Przykładowymi zastosowaniami tej metody mogą być dodawanie atrybutów do linków, zdjęć lub formularzy, a także do wykonywania operacji warunkowych w zależności od wartości atrybutów.

### 📅 Obsługa zdarzeń
  Aby obsłużyć zdarzenie, można użyć metody ``addEventListener()``. Metoda ta umożliwia dodanie funkcji do elementu, która zostanie wykonana po wystąpieniu określonego zdarzenia (np. kliknięcie).

  Metoda ``addEventListener()`` umożliwia obsługę różnych typów zdarzeń, takich jak kliknięcie, zmiana wartości, załadowanie strony czy wciśnięcie klawisza na klawiaturze. Aby obsłużyć konkretne zdarzenie, należy jako pierwszy argument podać jego nazwę, a jako drugi argument funkcję, która zostanie wykonana w momencie wystąpienia tego zdarzenia.

  Przykład obsługi zdarzenia zmiany wartości pola tekstowego:

  ```javascript
  // Przykładowy element HTML z identyfikatorem "my-input"
  const myInput = document.getElementById("my-input");

  // Dodanie funkcji obsługującej zmianę wartości pola tekstowego
  myInput.addEventListener("input", () => {
    console.log("Wartość pola tekstowego została zmieniona!");
  });
  ```
    
  W tym przykładzie dodana jest funkcja, która zostanie wykonana za każdym razem, gdy użytkownik zmieni wartość pola tekstowego. Dzięki temu można na bieżąco wykonywać jakieś operacje w zależności od wprowadzanych danych.

  Metoda ``addEventListener()`` pozwala również na usuwanie funkcji obsługującej zdarzenia. Aby to zrobić, należy użyć metody ``removeEventListener()`` i podać takie same argumenty, jakie zostały użyte przy dodawaniu funkcji obsługującej.

  Przykład usuwania funkcji obsługującej kliknięcie przycisku:

  ```javascript
  // Przykładowy element HTML z identyfikatorem "my-button"
  const myButton = document.getElementById("my-button");

  // Definicja funkcji obsługującej kliknięcie przycisku
  const handleClick = () => {
    console.log("Kliknięto przycisk!");
  }

  // Dodanie funkcji obsługującej kliknięcie przycisku
  myButton.addEventListener("click", handleClick);

  // po 3 sekundach usuwamy nasłuchiwacz zdarzeń
  setTimeout(() => {
      myButton.removeEventListener('click', handleClick);
  }, 3000);
  ```
  W tym przykładzie funkcja ``handleClick()`` zostaje najpierw dodana do elementu myButton, a następnie usunięta po 3 sekundach przy użyciu metody ``removeEventListener()``.

### 🎯 Efektywność
  Aby zoptymalizować wydajność manipulacji elementami DOM, zaleca się minimalizowanie liczby wykonywanych operacji na drzewie DOM oraz stosowanie technik jak debouncing, throttling czy fragmentowanie aktualizacji.
  
  Manipulacja elementami DOM może wpłynąć na wydajność strony internetowej, zwłaszcza gdy operacje są wykonywane często lub na dużych drzewach DOM. Dlatego ważne jest, aby stosować pewne techniki optymalizacji, które pozwolą na minimalizowanie liczby operacji i zmniejszenie czasu potrzebnego na ich wykonanie.

  Jedną z takich technik jest ``debouncing``. Polega ona na tym, że funkcja wywoływana po zdarzeniu (np. przewijanie strony) jest uruchamiana po określonym czasie od ostatniego wystąpienia zdarzenia. Dzięki temu unikamy wielokrotnego wywoływania funkcji i zwiększamy wydajność strony.

  Inną techniką jest ``throttling``. Polega ona na tym, że funkcja wywoływana po zdarzeniu jest uruchamiana co określony czas, niezależnie od tego, ile razy wystąpiło zdarzenie. W ten sposób unikamy wywoływania funkcji zbyt często i zwiększamy wydajność strony.

  Kolejną ważną techniką jest ``fragmentacja aktualizacji``. Polega ona na tym, że manipulacje na elementach DOM są grupowane w jedną operację, zamiast wykonywać je pojedynczo. Na przykład, zamiast zmieniać styl elementu w pętli, warto zmienić styl poza pętlą i tylko raz odświeżyć element. W ten sposób unikamy wielokrotnego odświeżania elementów i zwiększamy wydajność strony.

  > Poniżej przedstawiono przykład kodu, który demonstruje zastosowanie powyższych technik do zoptymalizowania wydajności manipulacji elementami DOM:

  ```javascript
  // debouncing
  // funkcja jest wywoływana po upływie 500ms od ostatniego zdarzenia
  let debounceTimer;
  window.addEventListener('scroll', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() {
      console.log('Scroll end');
    }, 500);
  });

  // throttling
  // funkcja jest wywoływana co 500ms
  let throttleTimer;
  window.addEventListener('scroll', function() {
    if (!throttleTimer) {
      throttleTimer = setTimeout(function() {
        throttleTimer = null;
        console.log('Scrolling');
      }, 500);
    }
  });

  // fragmentacja aktualizacji
  // zmiana stylu elementów jest grupowana w jedną operację
  let elements = document.querySelectorAll('.box');
  elements.forEach(function(element) {
    element.style.backgroundColor = 'red';
  });
  ```
W powyższym kodzie użyto ``setTimeout()`` do implementacji debouncingu i throttlingu. W przypadku fragmentacji aktualizacji, zmiana stylu elementów jest grupowana w jedną operację poprzez użycie metody ``forEach()``. Dzięki temu, manipulacje na elementach DOM są zoptymalizowane i strona działa szybciej i bardziej płynnie.

> Warto pamiętać, że manipulacja elementami DOM może mieć wpływ na wydajność strony internetowej, dlatego zaleca się stosowanie najlepszych praktyk i minimalizowanie liczby operacji na drzewie DOM.

---
