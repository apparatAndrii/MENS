<script>
	import Mens from '$images/mens-logo.png';
</script>

<main class="main">
	<img src={Mens} alt="Mens" />
	<h2>Happy codding!</h2>
	<h2>
		{process.env.ENVIROMENT == 'dev' ? 'Development mode' : 'Production mode'}
	</h2>
</main>
