# rsas
<span>restaurant sales automation system</span>

<h2>Api</h2>
<h3>endpoints</h3>
<ul>
    <li>
        <span>/auth/users/</span>
        <span>Зарегистрировать нового пользователя</span>
    </li>
<li>/auth/users/me/</li>
<li>/auth/jwt/create/</li>
<li>/auth/jwt/refresh/</li>
<li>/api/accounts/all-profiles/</li>
<li>/api/accounts/profile/id/</li>
</ul>

	
	получить/обновить зарегистрированного пользователя
	создать JWT, передав действующему пользователю в запросе post эту конечную точку
	получить новый JWT по истечении времени жизни ранее сгенерированного
	получить все профили пользователей и создать новый
	подробный вид профиля пользователя
