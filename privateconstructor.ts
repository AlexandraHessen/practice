class User {
    public name: string;
  
    private constructor (name: string) {
      this.name = name;
    }
  }
  
  const user: User = new User('Khalil Stemmler');  // Error