class ArrayUtils {
  constructor() {
    throw new Error("cannot instantiate class");
  }
  static average(arr) {
    let sum = 0;

    if (arr.length === 0) {
      console.log("array cannot be empty");
    }

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    console.log(sum / arr.length);
  }

  static max(arr) {
    let max = Math.max(...arr);
    console.log(max);
  }
}

try {
  const a = new ArrayUtils();
} catch (error) {
  console.error(error.message);
}

ArrayUtils.average([1, 2, 3, 4, 5]);
ArrayUtils.max([1, 2, 3, 4, 5]);
