<template>
    <!-- The Modal -->
    <div class="modal" id="modal-result">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                <h4 class="modal-title">Elért pontszám: </h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <h2 class="text-center">5 / {{ result }} </h2>
                    <iframe  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" width="420" height="315" v-show="skillIssue" allow="autoplay"></iframe>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Bezár</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  result : Number,
  skillIssue : Boolean
})
</script>