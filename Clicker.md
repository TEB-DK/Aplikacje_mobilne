<div align="center">
  
# Projekt Clicker 👆

</div>
  
Projekt Clicker jest prostą aplikacją, która skupia się na interakcji z użytkownikiem za pomocą kliknięć na ekranie. Głównym celem aplikacji jest zmotywowanie użytkownika do klikania poprzez wyświetlanie osiągnięć, które są dostępne po osiągnięciu określonej ilości kliknięć.

<div align="center">

![Clicker](https://github.com/TEB-DK/Aplikacje_mobilne/assets/125214141/aa327e81-c406-472a-9050-a8dd44c84a87)

</div>

Założenia projektu ``Clicker`` obejmują stworzenie komponentu kliknięć, który będzie odpowiedzialny za wyświetlanie aktualnej liczby kliknięć oraz osiągnięć, które użytkownik może odblokować. Osiągnięcia będą widoczne w postaci emotikonów i będą wyświetlane w pionowej liście pod komponentem kliknięć. Po kliknięciu na dane osiągnięcie zostanie wyświetlony krótki komunikat o odblokowaniu osiągnięcia.

Główne funkcjonalności projektu Clicker to:
- Wyświetlanie aktualnej liczby kliknięć
- Wyświetlanie osiągnięć w postaci emotikonów
- Odblokowywanie osiągnięć po osiągnięciu określonej ilości kliknięć
- Wyświetlanie krótkiego komunikatu o odblokowaniu osiągnięcia po jego kliknięciu

Projekt Clicker ma na celu zaprezentowanie podstawowych koncepcji programowania w języku React Native, takich jak tworzenie komponentów, obsługa zdarzeń i używanie funkcji Array.prototype.filter(). Aplikacja może również stanowić punkt wyjścia dla rozwijania bardziej zaawansowanych funkcjonalności, takich jak przechowywanie danych w pamięci urządzenia lub wykorzystanie różnych animacji i efektów wizualnych.

### Kroki do samodzielnego wykonania

1. Utwórz nowy projekt React Native, np. za pomocą komendy `npx react-native init [nazwa_projektu]`.
2. Utwórz nowy komponent, który będzie zawierał Twój Clicker. Możesz to zrobić, tworząc nowy plik w folderze `components` np. `Clicker.js`, a następnie zaimplementować tam całą logikę klikera.

<details>
<summary>Wskazówka</summary>
  
  Aby utworzyć nowy komponent, który będzie zawierał Twój kliker, wykonaj następujące kroki:

  - Utwórz nowy plik w folderze `components`, np. `Clicker.js`. Możesz to zrobić w swoim edytorze kodu lub w terminalu za pomocą komendy `touch components/Clicker.js`.

  - Otwórz plik `Clicker.js` w swoim edytorze kodu i dodaj import Reacta na początku pliku:

```jsx
import React from 'react';
```

  - Dodaj deklarację nowego komponentu `Clicker`, który zwróci tekst "Clicker" na ekranie:

```jsx
const Clicker = () => {
  return <Text>Clicker</Text>;
};
```

   - Zaimportuj komponent `Text` z React Native, dodając na górze pliku:

```jsx
import { Text } from 'react-native';
```

  - Wyeksportuj komponent `Clicker`, dodając na końcu pliku:

```jsx
export default Clicker;
```

Teraz możesz zaimportować komponent `Clicker` do innego pliku i umieścić go w swoim interfejsie użytkownika. W następnych krokach zaimplementujemy logikę klikera w tym komponencie.
  
</details>

4. W komponencie `Clicker` utwórz stan dla licznika kliknięć oraz listy osiągnięć.

<details>
<summary>Wskazówka</summary>

  W tym chodzi o utworzenie stanu dla licznika kliknięć oraz listy osiągnięć w komponencie `Clicker`. Stan możemy utworzyć przy użyciu hooka `useState`. 

Do utworzenia stanu licznika kliknięć możemy użyć następującego kodu:

```jsx
const [clicks, setClicks] = useState(0);
```

Powyższy kod tworzy zmienną `clicks`, która przechowuje aktualną wartość licznika kliknięć, oraz funkcję `setClicks`, która pozwala nam zmienić wartość tej zmiennej. Wartość początkowa licznika to `0`.

Do utworzenia stanu listy osiągnięć możemy użyć następującego kodu:

```jsx
const [achievements, setAchievements] = useState([
  {name: 'Achievement 1', emoji: '😀', clicks: 10},
  {name: 'Achievement 2', emoji: '🤩', clicks: 20},
  {name: 'Achievement 3', emoji: '🎉', clicks: 50},
]);
```

Kod tworzy zmienną `achievements`, która przechowuje aktualną listę osiągnięć, oraz funkcję `setAchievements`, która pozwala nam zmienić zawartość tej listy. Wartość początkowa listy to trzy osiągnięcia zdefiniowane w postaci obiektów. Każde osiągnięcie ma nazwę, emoji oraz liczbę kliknięć potrzebną do zdobycia osiągnięcia. Możemy oczywiście zmienić te wartości, dodawać nowe osiągnięcia itp.

</details>

5. Wykorzystaj komponent `TouchableOpacity` do stworzenia przycisku, który będzie zwiększał licznik kliknięć po każdym naciśnięciu.
6. Wykorzystaj mapowanie, aby wygenerować listę osiągnięć. Możesz utworzyć tablicę zawierającą obiekty dla każdego osiągnięcia, np. `{name: 'Achievement 1', emoji: '😀', clicks: 10}`.
7. Dodaj funkcję obsługującą kliknięcie na element osiągnięcia, która będzie dodawać dodatkowe kliknięcia do licznika w zależności od klikniętego osiągnięcia.
8. Stylizuj komponenty za pomocą `StyleSheet` z React Native. Możesz wykorzystać propsy takie jak `style`, aby dostosować wygląd przycisków, listy osiągnięć, itp.
9. Aby dodać ukrytą funkcję do osiągnięcia, dodaj warunek w funkcji obsługującej kliknięcie. Jeśli osiągnięcie 100 zostało kliknięte, dodaj 100 do licznika kliknięć.
