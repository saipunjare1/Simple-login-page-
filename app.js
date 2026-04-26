const { createApp } = Vue;

const LoginForm = {
    template: `
        <div class="login-container">
            <div class="login-box">
                <h1>Login</h1>
                <form @submit.prevent="handleLogin">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            v-model="form.email" 
                            placeholder="Enter your email"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            v-model="form.password" 
                            placeholder="Enter your password"
                            required
                        >
                    </div>

                    <button type="submit" class="btn-login">Login</button>
                </form>

                <p class="message" v-if="message" :class="message.type">
                    {{ message.text }}
                </p>
            </div>
        </div>
    `,
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            message: null
        };
    },
    methods: {
        handleLogin() {
            // Simple validation
            if (this.form.email && this.form.password) {
                this.message = {
                    text: `Welcome back, ${this.form.email}!`,
                    type: 'success'
                };
                // Reset form
                this.form.email = '';
                this.form.password = '';
                
                // Clear message after 3 seconds
                setTimeout(() => {
                    this.message = null;
                }, 3000);
            } else {
                this.message = {
                    text: 'Please fill in all fields',
                    type: 'error'
                };
            }
        }
    }
};

const app = createApp({});
app.component('login-form', LoginForm);
app.mount('#app');
