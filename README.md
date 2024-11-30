<!DOCTYPE html>
<html lang="ru">
<head>
   
    <title>подача заявки на работу в Coffee WAY</title>
    
   
    <link rel="icon" href="resized_logo-transformed.png" type="image/png">
    <style>body {
        font-family: Arial, sans-serif;
        background-color: #ffffff;
        display: flex;
        height: 100vh;
        justify-content: center;
        
        
    }
    
    .form-container{
        margin-top: 140px;
        background-color: #ffffff;
        padding: 20px 40px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;
        position: fixed;
       animation: fadeIn 2s ease-in-out;
    }
    
    
    
    form {
        display: flex;
        flex-direction: column;
    }
    
    label {
        margin-top: 10px;
        margin-bottom: 5px;
        font-weight: bold;
    }
    
    input, textarea, button {
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #460606;
        border-radius: 4px;
        width: 95%;
    }
    
    textarea {
        resize: none;
        
    }
    
    button {
        background-color: #350404;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
    }
    
    button:hover {
        background-color: #0056b3;
    }
    #logo{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100hv;
        margin-left: 10px;
        position: fixed;
        animation: fadeIn 1s ease-in-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes wave {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(20deg); }
        100% { transform: rotate(0deg); }
    }
    </style>
</head>
<body>
    <img src="resized_logo.png" alt="The image isn't available" width="139px" height="139px" id="logo" >
    <div class="form-container" >
    <fieldset>
        <h2>Заполните анкету для подачи резюме:</h2>
        <hr>
        <form id="myForm" action="https://getform.io/f/agddvepb" method="POST" enctype="multipart/form-data" onsubmit="handleSubmit(event)" >
        <label for="firstname">Имя:</label>
        
        <input type="text" id="firstname" name="firstname" required><br>
        <label for="lastname">Фамилия:</label>
        <input type="text" id="lastname" name="lastname" required><br>
        <label for="phonenumber">Номер Телефона:</label>
        <input type="tel" id="phonenumber" name="phonenumber" pattern="\+998[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" 
        placeholder="+998XXXXXXXXX"  required><br>
        <label for="position">Выберите вакансию:</label>
        <select id="position" name="position" required>
        <option value="" disabled selected>Выберите один из вариантов</option>
        <option value="barista">Бариста</option>
        <option value="manager">Управляющий</option>
        </select><br>
        <label for="resume">Резюме</label>
        <input type="file" id="resume" name="file" accept=".pdf, .doc, .docx"><br>
        <label for="startdate">Дата возможности начало работы:</label>
        <input type="date" id="startdate" name="startdate" required>
        <br>
        <button type="submit">Отправить</button>
    </form>
 </fieldset>
</div>
<script></script>


</body>
</html>
