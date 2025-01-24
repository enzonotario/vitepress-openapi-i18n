---
aside: false
outline: false
title: vitepress-openapi
---

<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import { useTheme } from 'vitepress-openapi/client'
import spec from '../../../public/openapi.pt-BR.json'

const route = useRoute()

const { isDark, lang } = useData()

const operationId = route.data.params.operationId

useTheme({
    i18n: {
        locale: lang.value,
    },
})
</script>

<OAOperation :operationId="operationId" :spec="spec" :isDark="isDark" />
