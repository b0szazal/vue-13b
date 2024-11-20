<template>
      <!-- The Modal -->
  <div class="modal" id="modal-osszeg">
    <div class="modal-dialog">
      <div class="modal-content">
  
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Ösztöndíj összege</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
  
        <!-- Modal body -->
        <div class="modal-body">
          <h2 class="text-center">{{ osztondij }} Ft / hó</h2>
          <!-- Ft / hó -->
        </div>
  
        <!-- Modal footer -->
        <div class="modal-footer">
          <button @click="nullaz" type="button" class="btn btn-success" data-bs-dismiss="modal">Új kalkuláció</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Bezár</button>
        </div>
  
      </div>
    </div>
  </div>
</template>
<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        osztondij: {
            type: Number,
            required: true
        }
    });
</script>