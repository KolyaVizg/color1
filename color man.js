<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Выбор пола и цвета кожи</title>
</head>
<body>

<form id="userInfo">
    <label for="gender">Выберите ваш пол:</label>
    <select id="gender">
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
        <option value="other">Другой</option>
    </select>

    <label for="skinColor">Выберите ваш цвет кожи:</label>
    <select id="skinColor">
        <option value="light">Светлый</option>
        <option value="medium">Средний</option>
        <option value="dark">Темный</option>
        <option value="other">Другой</option>
    </select>

    <button type="submit">Отправить</button>
</form>

<script>
document.getElementById('userInfo').onsubmit = function(e) {
    e.preventDefault();
    
    var gender = document.getElementById('gender').value;
    var skinColor = document.getElementById('skinColor').value;
    
    // Здесь можно добавить код для дальнейшей обработки полученной информации
    console.log("Пол пользователя: " + gender);
    console.log("Цвет кожи пользователя: " + skinColor);

    // Например, сохранение данных в базу данных или локальном хранилище, !!!! ИЛИ ПО ДРУГОМУ С ПОМОЩЬЮ КОДА 43
};
</script>

</body>
</html>
