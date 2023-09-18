# Aufagbe 7 - I18N

Sorge dafür, dass die Applikation mehrsprachig wird.

1. Initialisiere `i18next`
   1. Erzeuge eine neue Datei `i18next.ts`
   2. Binde die Plugins `ICU` und `initReacthI18next` ein
   3. Initialisiere `i18next` mit einer `fallbackLng`, `interpolation: {escapeValue: false}` und `resources`
   4. Importiere die Datei in der `main.tsx`-Datei
2. In der `List`-Komponente
   1. Übersetze die Lademeldung, die Fehlermeldung sowie die Spaltenüberschriften `useTranslation`
3. In der `ListItem`-Komponente
   1. Sorge dafür dass das Datum korrekt formatiert wird
4. Implementiere eine Komponente `LanguageSwitcher`, mit dem du die Sprache umschalten kannst (`useTranslation` und `i18n.changeLanguage()`)