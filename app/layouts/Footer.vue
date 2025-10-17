<template>
  <footer class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
    <div class="container mx-auto px-4 py-8">
      <!-- 主要内容区域 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 关于 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">关于博客</h3>
          <p class="text-gray-600 dark:text-gray-400">
            这是一个使用 Nuxt 4 和 Vite 构建的技术博客，分享前端开发、Web 技术和编程心得。
          </p>
        </div>
        
        <!-- 快速链接 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">快速链接</h3>
          <!-- <ul class="space-y-2">
            <li>
              <NuxtLink 
                to="/" 
                class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition"
              >
                首页
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/blog" 
                class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition"
              >
                博客
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/about" 
                class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition"
              >
                关于
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/contact" 
                class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition"
              >
                联系
              </NuxtLink>
            </li>
          </ul> -->
        </div>
        
        <!-- 社交媒体 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">关注我</h3>
          <div class="flex space-x-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition"
              aria-label="GitHub"
            >
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition"
              aria-label="Twitter"
            >
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition"
              aria-label="LinkedIn"
            >
            </a>
          </div>
          
          <!-- 订阅表单 -->
          <div class="mt-6">
            <h4 class="text-sm font-medium mb-2">订阅更新</h4>
           
          </div>
        </div>
      </div>
      
      <!-- 版权信息 -->
      <div class="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>© {{ new Date().getFullYear() }} My Blog. 保留所有权利。</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const email = ref('')

const subscribe = () => {
  // 这里可以添加订阅逻辑，比如调用API
  console.log('订阅邮箱:', email.value)
  alert(`感谢订阅！我们将发送更新到 ${email.value}`)
  email.value = ''
}
</script>