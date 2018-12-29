<template>
                

                <div class="card">
                    <div class="card-body">

                        <div class="btn-group" role="group">
                            <button
                                @click="changeMethod('address')"
                                :class="{ 'btn-success': method === 'address', 'btn-secondary': method === 'qrcode' }"
                                class="btn">Address</button>

                            <button
                                @click="changeMethod('qrcode')"
                                :class="{ 'btn-success': method === 'qrcode', 'btn-secondary': method === 'address' }"
                                class="btn">QR-Code</button>
                        </div>

                        <div v-if="method === 'address'">

                            <div class="form-group">
                                <label>Product</label>
                                    <small class="form-text text-muted">
                                        Surprise GIF
                                    </small>
                                </div>

                                <div class="form-group">
                                    <label>ARK Address</label>
                                    <small class="form-text text-muted">
                                        {{ recipient }}
                                        <span class="clipboard float-right animated" @click="animateCopy">
                                            <img v-clipboard="recipient" src="images/clipboard.png">
                                        </span>
                                    </small>
                                </div>

                                 <div class="form-group">
                                    <label>Vendor Field</label>
                                    <small class="form-text text-muted">
                                        {{ vendorField }}
                                        <span class="clipboard float-right animated" @click="animateCopy">
                                            <img v-clipboard="vendorField" src="images/clipboard.png">
                                        </span>
                                    </small>
                                </div>

                                <div class="form-group" v-if="amountCrypto">
                                    <label>Amount</label>
                                    <small class="form-text text-muted">
                                        <span class="badge">DѦ</span>
                                        {{ amountCrypto }} / ${{ amount }}
                                        <span class="clipboard float-right animated" @click="animateCopy">
                                            <img v-clipboard="amountCrypto" src="images/clipboard.png">
                                        </span>
                                    </small>
                                </div>
                            </div>

                        <div v-if="method === 'qrcode'" class="text-center">
                            <a :href="scanLink">
                                <qrcode :value="scanLink" :options="{ size: 256, padding: 0 }"></qrcode>
                            </a>
                        </div>
                   

                    <div v-if="!hasPaid">
                        <div class="form-group">
                            <label>Time to pay:
                                <img src="images/time.png" class="time inline-block"> {{ countdownLabel }}
                            </label>
                            <small class="form-text text-muted">Waiting for transaction confirmation ...
                            </small>
                        </div>
                        <div class="col-sm-12 text-center">
                            <a :href="scanLink" class="btn btn-primary btn-sm">Pay Now</a>
                        </div>
                    </div>

                    <div class='row'>
                        <div class="col-sm-12" v-if="hasPaid">
                            <img :src="product" />
                        </div>
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
                network : 'devnet',
                currency : 'USD',
                recipient: 'DNjuJEDQkhrJ7cA9FZ2iVXt5anYiM8Jtc9',
                amount: 1
            }
    },
    mounted() {
            this.setup()
        },
  }
</script>
