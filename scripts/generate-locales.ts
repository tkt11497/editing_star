export default defineNitroPlugin(() => {
  const locales = ['en', 'es']
  const routes = ['/'] // Add your base routes

  return {
    routes: locales.flatMap(locale => 
      routes.map(route => 
        locale === 'en' ? route : `/${locale}${route}`
      )
    )
  }
}) 