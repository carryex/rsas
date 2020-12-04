# rsas
<span>restaurant sales automation system</span>

<h2>Api</h2>
<h3>endpoints</h3>
<table>
    <tr>
        <td>/auth/users/</td>
        <td>Зарегистрировать нового пользователя</td>
    </tr>
    <tr>
        <td>/auth/users/me/</td>
        <td>получить/обновить зарегистрированного пользователя</td>
    </tr>
    <tr>
        <td>/auth/jwt/create/</td>
        <td>создать JWT, передав действующему пользователю в запросе post эту конечную точку</td>
    </tr>
    <tr>
        <td>/auth/jwt/refresh/</td>
        <td>получить новый JWT по истечении времени жизни ранее сгенерированного</td>
    </tr>
    <tr>
        <td>/api/accounts/all-profiles/</td>
        <td>получить все профили пользователей и создать новый</td>
    </tr>
    <tr>
        <td>/api/accounts/profile/id/</td>
        <td>подробный вид профиля пользователя</td>
    </tr>
    <tr>
        <td>/api/restoran/day</td>
        <td>get</td>
        <td>текущий день</td>
    </tr>
</table>
