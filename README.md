# Крестики-Нолики
Игра крестики-нолики, написана на React (Next.js) + TypeScript + Ant.d + RTK + Featured-sliced Design.  
**Поиграть можно [здесь](https://corvus278.github.io/Tic-tac-toe/)**

## Функциональность
- выбор стороны (крестики/нолики)
- возможность вернуться назад, до первого хода в партии
- возможность сдаться

Игра полонстью адаптирована под мобильные телефоны

![img.png](img.png)

## Запуск
### Пакетный менеджер
```
npm run build 
```
```
npm run start
```

### Docker
```
docker build . -t tic-tac-toe
```
```
docker run -p 3000:3000 tic-tac-toe
```
