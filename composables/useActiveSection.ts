export const useActiveSection = () => {
  const activeSection = ref<string>('home')
  
  onMounted(() => {
    const sectionIds = ['home', 'product', 'howItWorks', 'evaluation', 'audience', 'users', 'price']
    let timeoutId: NodeJS.Timeout | null = null
    
    const updateActive = () => {
      const scrollY = window.scrollY + window.innerHeight / 2
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i])
        if (element && element.offsetTop <= scrollY) {
          activeSection.value = sectionIds[i]
          break
        }
      }
    }
    
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId)
      
      timeoutId = setTimeout(() => {
        updateActive()
      }, 100) 
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    updateActive() 
    
    onUnmounted(() => {
      if (timeoutId) clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
    })
  })
  
  return { activeSection }
}