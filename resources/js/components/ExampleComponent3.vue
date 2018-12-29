<template>
    <div class="card">
        <div class="card-body">

              <div v-if="method === 'qrcode'" class="text-center">
                            <a :href="scanLink">
                                <qrcode :value="scanLink" :options="{ size: 256, padding: 0 }"></qrcode>
                            </a>
                        </div>

            <div class="btn-group" role="group" aria-label="Basic example">
                <button
                    @click="changeMethod('qrcode')"
                    :class="{ 'btn-primary': method === 'qrcode', 'btn-secondary': method === 'address' }"
                    class="btn">Show QR-Code</button>

                    <a :href="scanLink" class='btn btn-outline-primary'><img src='/images/pay.png' class='img-fluid'/></a>

            </div>
            </div>

        </div>
    </div>
</template>

<script>
  import BaseComponent from './BaseComponent.vue';
  export default {
    extends: BaseComponent,

     data() {
            return {
                network : 'mainnet',
                currency : 'USD',
                recipient: 'AJTzQnD7AiEWFLtojDEEU7tNXoGDVYTZpW',
                amount: 1
            }
    },

    methods: {

        //Don't do the countdown on this one
        countdown() {},

        //Overwrite setPaid function
        setPaid() {
            this.hasPaid = true
            this.product = sample(this.products)
            alert("Payment received, we could now load a thank you page, process the invoice payment etc");
        }

        },

    mounted() {
            this.setup()
        },
  }
</script>
