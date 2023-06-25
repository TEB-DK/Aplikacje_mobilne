# React Native ⚛️ 

## ⚙️ Poradnik instalacyjny React Native
Aby skonfigurować środowisko dla ``React Native``:

1. Zainstaluj **Chocolatey**:
   - Aby oszczędzić sobie kroków instalacji oddzielnie Node.js oraz JDK, możemy wykorzystać w tym celu Chocolatey, jednak musimy je uprzednio zainstalować.
   - Służy ku temu jedno polecenie wykonanie w PowerShell'u otworzonym z uprawnieniami administratora:
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```
    po wklejeniu tego polecenia zatwierdzamy ``ENTER``.

1. Zainstaluj **Node.js** i **Java Development Kit** (JDK): 
   - **React Native wymaga zainstalowanego JDK w wersji 8 lub nowszej**.
   - Aby zainstalować Node.js i JDK jednym poleceniem należy wykonać w PowerShell'u z uprawnieniami administratora polecenie:
   ```powershell
   choco install -y nodejs-lts microsoft-openjdk11
   ```
   po wklejeniu tego polecenia zatwierdzamy ``ENTER``.


3. Zainstaluj **Android Studio**:
   - Android Studio jest wymagane do uruchamiania aplikacji React Native na emulatorze Androida.
   - Możesz pobrać Android Studio ze strony [ 🔗 Android Studio](https://developer.android.com/studio) i zainstalować zgodnie z instrukcjami dla Twojego systemu.

4. Skonfiguruj zmienną środowiskową ``JAVA_HOME``:
   - Na systemie Windows otwórz ``Panel sterowania`` -> ``System`` -> ``Zaawansowane ustawienia systemu`` -> ``Zmienne środowiskowe``.
   - Dodaj zmienną środowiskową ``JAVA_HOME``, która wskazuje na katalog JDK.
   - Ścieżka do JDK **prawdpodobnie** będzie:  
     ```cmd
     C:\Program Files\Microsoft\jdk-11.0.18.10-hotspot
     ```

5. Zainstaluj **Android SDK**:
   - Uruchom Android Studio, kliknij ``More Actions`` i otwórz ``Android SDK Manager`` (narzędzie SDK Manager).
   - Wybierz zakładkę ``SDK Platforms`` w SDK Manager, a następnie zaznacz pole obok ``Show Package Details`` w prawym dolnym rogu. Poszukaj i rozwiń ``Android 13 (Tiramisu)``, a następnie upewnij się, że zaznaczone są następujące elementy:
     - ``Android SDK Platform 33``
     - ``Intel x86 Atom_64 System Image`` lub ``Google APIs Intel x86 Atom System Image``
   - Następnie wybierz zakładkę ``SDK Tools`` i zaznacz pole obok ``Show Package Details``. Poszukaj i rozwiń wpis ``Android SDK Build-Tools``, a następnie upewnij się, że wybrana jest wersja ``33.0.0``. Ostatecznie kliknij ``Zastosuj`` i zainstaluj zaznaczone pakiety.
   - Po zainstalowaniu skonfiguruj zmienną środowiskową ``ANDROID_HOME``, wskazującą na katalog SDK.
   - Ścieżka do SDK **prawdopodobnie** będzie: 
     ```cmd
     %LOCALAPPDATA%\Android\Sdk
     ```

6. Zainstaluj **React Native CLI**:
   - Otwórz terminal lub wiersz polecenia i wykonaj komendę: `npm install -g react-native-cli`

7. Stwórz nowy projekt React Native:
   - W terminalu przejdź do wybranego katalogu, w którym chcesz utworzyć projekt.
   - Wykonaj polecenie: `npx react-native init NazwaProjektu`
   - Spowoduje to utworzenie nowego projektu React Native o nazwie "NazwaProjektu".

8. Uruchom projekt na emulatorze Android:
   - Otwórz Android Studio i uruchom emulator Androida.
   - W terminalu przejdź do katalogu projektu React Native.
   - Wykonaj polecenie: `npx react-native run-android`
   - Projekt zostanie skompilowany i uruchomiony na emulatorze Androida.

W razie problemów prześledź kroki raz jeszcze z [ 🔗 oficjalną dokumentacją React Native](https://reactnative.dev/docs/environment-setup)


## 🔥 Poradnik Firebase
Aby utworzyć konto w Firebase i utworzyć bazę danych, którą będziesz mógł podłączyć do aplikacji React Native musisz wykonać następujące kroki:

1. Przejdź na stronę internetową [ 🔗 Firebase](https://firebase.google.com/)

2. Kliknij przycisk ``Get started`` lub ``Get started for free``.

3. Zaloguj się na istniejące konto Google lub utwórz nowe, używając adresu e-mail.

4. Po zalogowaniu się, kliknij przycisk ``Add project`` (Dodaj projekt).

5. Wprowadź nazwę projektu Firebase i opcjonalnie wybierz identyfikator projektu. Kliknij przycisk ``Continue``.

6. Wybierz opcje dodatkowe, takie jak Analytics, Crashlytics, itp. (opcjonalnie). Kliknij przycisk ``Continue``.

7. Zaakceptuj warunki korzystania z Firebase i kliknij przycisk ``Create project`` (Utwórz projekt).

8. Po utworzeniu projektu Firebase, przejdź do konsoli Firebase lub jeśli jesteś w projekcie to.

9. W panelu bocznym wybierz sekcję ``Firestore Database`` (Baza danych).

10. Kliknij przycisk ``Create database`` (Utwórz bazę danych).

11. Wybierz tryb testowy (Start in test mode) lub tryb produkcyjny (Start in production mode) w zależności od swoich wymagań, zalecam użycie trybu testowego.

12. Wybierz lokalizację bazy danych (np. Poland) i kliknij przycisk ``Next``.

13. Aby wygenerować wszystkie potrzebne klucze należy przejść do głównej strony swojego projektu i wybrać technologię z którą chcemy współpracować, do współpracy z React Native wybieramy ikonkę ``</>``

    ![firebase](https://github.com/TEB-DK/Aplikacje_mobilne/assets/125214141/9c9b6965-840b-4b33-a714-44d36b0cbf2e)

14. Baza danych Firebase została utworzona. Możesz teraz skorzystać z informacji o konfiguracji, takich jak klucz API, identyfikator projektu, itp., aby skonfigurować połączenie z bazą danych w aplikacji React Native.

### :bookmark_tabs: Plik konfiguracyjny Firebase
Uprzednio należy zainstalować wymaganą paczkę firebase
```
npm install firebase
```

Plik konfiguracyjny *config.js*
```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

   apiKey: "APIKEY",
  
   authDomain: "nazwaprojektu-1234.firebaseapp.com",
  
   databaseURL: "https://nazwaprojektu-1234-default-rtdb.firebaseio.com",
  
   projectId: "nazwaprojektu-1234",

   storageBucket: "nazwaprojektu-1234.appspot.com",
  
   messagingSenderId: "1234567890123",
  
   appId: "1:abcdef123456789:web:abcdef123456789",
  
   measurementId: "G-ABCDEFG123456"
  
};
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

Teraz masz utworzone konto w Firebase i gotową bazę danych Firebase. Możesz użyć informacji o konfiguracji, aby skonfigurować połączenie z bazą danych Firebase w swojej aplikacji React Native.

## 📚 Oprawa merytoryczna

### Budowanie wyglądu strony

- ``Importowanie komponentów``: Zacznijmy od tego, żebyśmy mieli dostęp do różnych klocków, które będziemy używać do zbudowania naszego obrazka. Na przykład potrzebujemy klocków z napisem, obrazkiem, przyciskiem do klikania itp.

   ```jsx
   import React from 'react'
   import { View, Text, Image, TouchableOpacity } from 'react-native'
   ```

- ``Komponent nadrzędny``: Wybierzmy duży klocek, który będzie naszym głównym klockiem i na którym będziemy układać resztę klocków. To będzie nasza plansza do układania.

   ```jsx
   const App = () => {
   return (
      <View style={styles.container}>
         {/* Tutaj będziemy umieszczać nasze klocki */}
      </View>
   )}
   ```

- ``Układ komponentów``: Teraz zabierzmy się do układania naszych mniejszych klocków na planszy. Możemy je umieszczać obok siebie lub jeden na drugim, jak w wieży klocków.

   ```jsx
   const App = () => {
   return (
      <View style={styles.container}>
         <View style={styles.block1}>
         {/* Pierwszy klocek */}
         </View>
         <View style={styles.block2}>
         {/* Drugi klocek */}
         </View>
         {/* Kontynuuj dodawanie innych klocków */}
      </View>
   )}
   ```

- ``Stylizacja komponentów``: Teraz, że mamy nasze klocki poukładane, możemy nadać im kolory i inne fajne efekty, tak jak malujemy nasze klocki. Możemy używać różnych kolorów i malować wzory, takie jak paski lub kropki.

   ```jsx
   const App = () => {
   return (
      <View style={styles.container}>
         <View style={[styles.block, { backgroundColor: 'red' }]}>
         {/* Klocek o czerwonym kolorze */}
         </View>
         <View style={[styles.block, { backgroundColor: 'blue' }]}>
         {/* Klocek o niebieskim kolorze */}
         </View>
         {/* Dodaj więcej klocków z różnymi kolorami */}
      </View>
   )}
   ```

- ``Renderowanie komponentu``: Na koniec, pokazujemy nasz gotowy obrazek, wystawiając go na widok wszystkich ludzi. Możemy to zrobić poprzez wystawienie naszego obrazka w galerii lub pokazanie go na wystawie.

   ```jsx
   const App = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Moje dzieło!</Text>
         <Image source={require('./obrazek.png')} style={styles.image} />
         <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>Zobacz galerię</Text>
         </TouchableOpacity>
      </View>
   )}
   ```

### Podstawowe komponenty
### 1. View

Komponent ``View`` jest podstawowym kontenerem używanym do grupowania innych komponentów w hierarchii. Działa jako wizualny blok, który może zawierać inne komponenty i definiować układ oraz stylizację.
   
   - Przykład wykorzystania:
   ```jsx
   import React from 'react';
   import { View, StyleSheet } from 'react-native';

   const App = () => {
     return (
       <View style={styles.container}>
         {/* Tutaj umieszczamy inne komponenty */}
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
   });

   export default App;
   ```

### 2. TextInput

Komponent ``TextInput`` służy do wprowadzania tekstu przez użytkownika. Pozwala na interakcję i pobieranie danych tekstowych.
   - Przykład wykorzystania:

   ```jsx
   import React, { useState } from 'react';
   import { View, TextInput, StyleSheet } from 'react-native';

   const App = () => {
     const [text, setText] = useState('');

     const handleChangeText = (value) => {
       setText(value);
     };

     return (
       <View style={styles.container}>
         <TextInput
           style={styles.input}
           value={text}
           onChangeText={handleChangeText}
           placeholder="Wprowadź tekst"
         />
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     input: {
       width: '80%',
       height: 40,
       borderWidth: 1,
       borderColor: 'gray',
       paddingHorizontal: 10,
     },
   });

   export default App;
   ```

### 3. Text

Komponent ``Text`` służy do wyświetlania tekstu na ekranie. Może zawierać różne style i formatowanie tekstu.
   - Przykład wykorzystania:

   ```jsx
   import React from 'react';
   import { View, Text, StyleSheet } from 'react-native';

   const App = () => {
     return (
       <View style={styles.container}>
         <Text style={styles.title}>Witaj, Świecie!</Text>
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     title: {
       fontSize: 24,
       fontWeight: 'bold',
     },
   });

   export default App;
   ```

### 4. Button

Komponent ``Button`` służy do tworzenia przycisków, które można kliknąć. Może mieć funkcję obsługi kliknięcia, która wykonuje określone akcje. Natomiast jest możliwość stworzenia własnego przycisku za pomocą dwóch bazowych komponentów - TouchableOpacity oraz Text.
   - Przykład wykorzystania:

   ```jsx
   import React from 'react';
   import { View, Button, Alert, StyleSheet } from 'react-native';

   const App = () => {
     const handlePress = () => {
       Alert.alert('Kliknięto przycisk!');
     };

     return (
       <View style={styles.container}>
         <Button title="Kliknij mnie" onPress={handlePress} />
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
   });

   export default App;
   ```

### 5. TouchableOpacity

Komponent ``TouchableOpacity`` jest używany do tworzenia interaktywnych elementów, które można kliknąć. Może zawierać inne komponenty i ma efekt przezroczystości po kliknięciu.
   - Przykład wykorzystania:

   ```jsx
   import React from 'react';
   import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

   const App = () => {
     const handlePress = () => {
       console.log('Kliknięto TouchableOpacity!');
     };

     return (
       <View style={styles.container}>
         <TouchableOpacity style={styles.button} onPress={handlePress}>
           <Text style={styles.buttonText}>Kliknij mnie</Text>
         </TouchableOpacity>
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     button: {
       backgroundColor: 'blue',
       padding: 10,
       borderRadius: 5,
     },
     buttonText: {
       color: 'white',
       fontSize: 18,
     },
   });

   export default App;
   ```

### 6. Image

Komponent ``Image`` służy do wyświetlania obrazków na ekranie. Może pobierać obrazy z lokalnego systemu plików lub z zewnętrznego źródła.
   - Przykład wykorzystania:

   ```jsx
   import React from 'react';
   import { View, Image, StyleSheet } from 'react-native';

   const App = () => {
     return (
       <View style={styles.container}>
         <Image
           style={styles.image}
           source={require('./assets/image.jpg')}
           resizeMode="contain"
         />
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     image: {
       width: 200,
       height: 200,
     },
   });

   export default App;
   ```

To są podstawowe komponenty w React Native. Można je dostosować i łączyć w różne sposoby, aby tworzyć rozbudowane interfejsy użytkownika.


🌟 Stwórz za pomocą podstawowych komponentów swój własny komponent - przycisk, wykorzystaj wiedzę zawartą w tym dziale.

🌟 Odtwórz wygląd widoku zamieszczony na obrazku, korzystając z podstawowych komponentów

<img width="350px" src='https://github.com/TEB-DK/Aplikacje_mobilne/assets/125214141/a2c1b0b5-21be-46c9-b226-ed495df488c0'
   />

### Hooki i funkcje asynchroniczne w React Native
Krótkie omówienie trzech ważnych pojęć: `useState`, `useEffect` oraz asynchroniczności funkcji.

1. `useState`: Jest to hook w React, który umożliwia przechowywanie i aktualizowanie stanu komponentu. Pozwala on na tworzenie zmiennych stanu wewnątrz funkcji komponentu. `useState` zwraca parę wartość-zmienioneFunkcje. Pierwszy element pary zawiera aktualną wartość zmiennej stanu, a drugi element to funkcja, która umożliwia zmianę tej wartości.

```javascript
const [state, setState] = useState(initialValue);
```

W powyższym przykładzie `state` to zmienna stanu, a `setState` to funkcja używana do jej aktualizacji. `initialValue` to początkowa wartość zmiennej stanu.

2. `useEffect`: Jest to hook w React, który umożliwia wykonywanie efektów ubocznych w komponencie, takich jak pobieranie danych, subskrypcje czy czyszczenie zasobów. `useEffect` pozwala reagować na zmiany w komponencie w czasie jego cyklu życia. Przyjmuje dwa argumenty: funkcję efektu oraz tablicę zależności. Funkcja efektu jest wywoływana po każdym renderowaniu komponentu, a tablica zależności określa, które zmienne mają być monitorowane w celu wywołania efektu tylko wtedy, gdy te zmienne się zmienią.

```javascript
useEffect(() => {
  // Kod efektu
}, [dependencies]);
```

W powyższym przykładzie `() => { // Kod efektu }` to funkcja efektu, która zostanie wywołana po renderowaniu komponentu. `[dependencies]` to tablica zależności, która określa, które zmienne mają być monitorowane.

3. Asynchroniczność funkcji: Asynchroniczność w języku JavaScript dotyczy wykonywania operacji, które mogą zająć pewien czas, takich jak pobieranie danych z bazy danych lub zasobów sieciowych. Aby obsługiwać asynchroniczne operacje, używamy mechanizmów takich jak asynchroniczne funkcje (`async/await`) lub funkcje zwrotne (callback). 

- Asynchroniczne funkcje (`async/await`): Pozwalają na pisanie asynchronicznego kodu w sposób synchroniczny. Funkcja oznaczona jako `async` zwraca obiekt `Promise`, który reprezentuje wartość, która może być dostępna w przyszłości. Wewnątrz funkcji `async` możemy używać słowa kluczowego `await`, które oczekuje na zakończenie operacji asynchronicznej i zwraca wynik tej operacji.

```javascript
const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
};
```

- Funkcje zwrotne (callback): Innym sposobem obsługi asynchroniczności jest użycie funkcji zwrotnych. Funkcje zwrotne są przekazywane jako argumenty do innych funkcji i są wywoływane w momencie zakończenia operacji asynchronicznej.

```javascript
const fetchData = (callback) => {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};
```

W powyższych przykładach `fetchData` to funkcja asynchroniczna lub funkcja używająca funkcji zwrotnej do pobrania danych z API.

Te koncepty są powszechnie stosowane w React Native do zarządzania stanem komponentów oraz wykonywania operacji asynchronicznych.

## 📃 Aplikacja zarządzająca zadaniami - Todo App

Celem aplikacji jest możliwość dodawania i usuwania zadań, które zostają wprowadzone przez użytkownika i *tymczasowo* (w state) lub *na stale* (w bazie danych) zostają zachowane.

<div align="center">

<img width="300px" src="https://github.com/TEB-DK/Aplikacje_mobilne/assets/125214141/3da2c2f7-51dd-4cee-a625-3f1aacd3920c">
</img>
<img width="300px" src="https://github.com/TEB-DK/Aplikacje_mobilne/assets/125214141/70facf55-dcd2-4db9-bc23-06bc43a083ef">
</img>

</div>

Zadania do wykonania są następujące:
- Część I

   <details>
   <summary></summary>

   Krok po kroku opis kodu służący do wykonania zadania z objaśnieniem: 

   - Importowanie komponentów
   ```javascript
   import React, { useEffect, useState } from 'react';
   import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
   ```
   W tym fragmencie importujemy potrzebne komponenty z biblioteki react-native oraz React Hooks, które będziemy używać w naszej aplikacji.

   - Inicjalizacja stanu

   ```javascript
   const [task, setTask] = useState('');
   const [tasks, setTasks] = useState([]);
   ```
   Przy użyciu hooka `useState` tworzymy dwa stany: `task` przechowujący aktualnie wprowadzaną wartość pola tekstowego oraz `tasks` przechowujący listę zadań. Za pomocą funkcji `setTask` i `setTasks` będziemy aktualizować te stany.

   - Dodawanie zadania

   ```javascript
   const addTask = () => {
   if (task) {
      setTasks([...tasks, { id: Date.now(), title: task, completed: false }]);
      setTask('');
   }}
   ```
   Funkcja `addTask` sprawdza, czy pole tekstowe (`task`) nie jest puste. Jeśli nie jest puste, tworzy nową tablicę `tasks` zawierającą poprzednie zadania oraz nowe zadanie o unikalnym identyfikatorze (`id`), treści (`title`) pobranej z pola tekstowego oraz flagi (`completed`) ustawionej na `false`. Następnie aktualizuje stan `tasks` oraz czyści pole tekstowe.

   - Usuwanie zadania
   ```javascript
   const deleteTask = id => {
   const updatedTasks = tasks.filter(task => task.id !== id);
   setTasks(updatedTasks);
   }
   ```
   Funkcja `deleteTask` przyjmuje identyfikator zadania (`id`) do usunięcia. Wykorzystuje metodę `filter` do utworzenia nowej tablicy `updatedTasks`, w której zostaną zachowane tylko zadania o różnych identyfikatorach niż podane `id`. Następnie aktualizuje stan `tasks` z nową tablicą zadaniami.

   - Przełączanie stanu ukończenia zadania
   ```javascript
   const toggleTaskCompletion = id => {
   const updatedTasks = tasks.map(task => {
      if (task.id === id) {
         return { ...task, completed: !task.completed };
      }
      return task;
   })
   setTasks(updatedTasks);
   }
   ```
   Funkcja `toggleTaskCompletion` przyjmuje identyfikator zadania (`id`). Wykorzystuje metodę `map` do utworzenia nowej tablicy `updatedTasks`, w której dla zadania o pasującym identyfikatorze `id` zmienia flagę `completed` na przeciwną (czyli jeśli było `true`, to staje się `false`, a jeśli było `false`, to staje się `true`). Dla innych zadań zachowuje oryginalne wartości. Następnie aktualizuje stan `tasks` z nową tablicą zadaniami.

   - Renderowanie pojedynczego zadania
   ```javascript
   const renderItem = ({ item }) => (
   <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
         <Text
         style={[
            styles.taskTitle,
            { textDecorationLine: item.completed ? 'line-through' : 'none' },
         ]}
         >
         {item.title}
         </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
         <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
   </View>
   );
   ```
   Funkcja `renderItem` przyjmuje obiekt `item`, który reprezentuje pojedyncze zadanie z listy. Renderuje kontener (`View`) zawierający tekst zadania (`Text`) oraz przyciski do przełączania stanu ukończenia zadania i usuwania zadania (`TouchableOpacity`). Stylizacja tekstu zadania jest dynamicznie modyfikowana na podstawie wartości flagi `completed` za pomocą `textDecorationLine` (jeśli `completed` jest `true`, to linia przekreślenia jest dodawana).

   - Renderowanie głównego widoku aplikacji
   ```javascript
   return (
   <View style={styles.container}>
      <Text style={styles.title}>TODO List</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
         <TextInput
         style={styles.input}
         value={task}
         onChangeText={text => setTask(text)} 
         placeholder="Add a task"
         />
         <TouchableOpacity style={styles.saveButton} onPress={saveTasksToDatabase}>
         <Text style={styles.saveButtonLabel}>Save</Text>
         </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
         <Text style={styles.addButtonLabel}>Add</Text>
      </TouchableOpacity>
      <FlatList
         data={tasks}
         renderItem={renderItem}
         keyExtractor={item => item.id.toString()}
      />
   </View>
   );
   ```

   W tym fragmencie renderujemy główny widok aplikacji. Zawiera on nagłówek (``TODO List``), pole tekstowe (`TextInput`) do wprowadzania nowego zadania, przycisk "Save", przycisk "Add" oraz listę zadań (`FlatList`). Stan `task` jest przypisany do wartości pola tekstowego, a przy każdej zmianie pola tekstowego aktualizuje się stan za pomocą funkcji `setTask`. Po kliknięciu przycisku "Add" wywoływana jest funkcja `addTask`, a dla każdego zadania w liście wywoływana jest funkcja `renderItem`.


   </details>
   
   - Wykonać wygląd aplikacji zgodnie z zamieszczonymi przykładami.
   - Dodać funkcjonalności: dodawania elementów listy, usuwania elementów z listy.
   - 🌟 Dodanie funkcjonalności wykreślania poszczególnego zadania.



- Część II

   <details>
   <summary> </summary>

   ```jsx
   useEffect(() =>{
      loadSavedTasks()
   },[])

   const isDoc = async () =>{
      await getDocs(collection(db, 'test')).then((q) => {
         if (q.empty) {return false}
         return true
      })
   }
   
   const loadSavedTasks = async () =>{
      return await getDocs(collection(db,'test')).then((q) => {
         const loaded = q.docs.map((doc) => doc.data())
         setTasks(loaded[0].todos)
      })          
   }

   const saveTasksToDatabase = async () => {
      try {
         if (!tasks.length) { return Alert.alert('Lista jest pusta, tego nie wyślemy :< ')}

         if (isDoc()) {
         const docRef = await updateDoc(doc(db,'test','todolist'), {
            todos: tasks
         })
         return Alert.alert('Lista zostałą zapisana w bazie danych :)')
         }

         const docRef = await setDoc(doc(db, 'test', 'todolist'), {
         todos: tasks
         }).then(() => {
         Keyboard.dismiss()
         Alert.alert('Lista została zapisana w bazie danych :)')
         })

      } catch (error) {
         Alert.alert(error)
      }
   };
   ```

   </details>

   - Dodanie funkcjonalności zapisu stworzonej listy do bazy danych Firestore.
