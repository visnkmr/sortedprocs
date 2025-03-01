# SortedCars: Vehicle Comparison and Dimension Explorer

[![GitHub license](https://img.shields.io/github/license/visnkmr/carproj)](https://github.com/visnkmr/carproj/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/visnkmr/carproj)](https://github.com/visnkmr/carproj/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/visnkmr/carproj)](https://github.com/visnkmr/carproj/network/members)

**SortedCars** is a web application built with Next.js (React) and TypeScript that allows users to explore, filter, sort, and compare various car models based on their dimensions and other specifications. It's designed to help users make informed decisions when considering a new vehicle.

## Features

-   **Extensive Car Database:** Includes a wide range of car models from different manufacturers like Renault, Nissan, BYD, Škoda, Maruti Suzuki, Hyundai, Honda, Tesla, MG, Fiat, Tata, Toyota, Kia, Mahindra, Volkswagen, BMW, Citroën, Volvo, and Jeep.
-   **Dimension Filtering:** Filter cars based on height, width, length, wheelbase, turn radius, and ground clearance using interactive sliders.
-   **Search Functionality:** Quickly find specific car models by name.
-   **Manufacturer Filtering:** Filter cars by manufacturer.
-   **Sorting:** Sort cars by name, length, width, height, price, manufacturer, ground clearance, wheelbase, turn radius, weight, estimated cabin space, size to weight ratio and drag coefficient in ascending or descending order.
-   **Pinning:** Pin a car to compare it directly with other models using detailed percentage-based differences in price, dimensions and other metrics.
- **Starring:** Mark car as your favourite and view all the stared cars easily.
-   **Comparison Filters:** Set up conditional comparisons (greater than or less than) for a specific field relative to the pinned car.
-   **Dynamic Dimension Ranges:** The slider ranges dynamically adjust based on the minimum and maximum values for each dimension across all included car models.
- **Calculated Fields:** It show calculated fields like Estimated Cabin Space and Size to weight ratio.
- **Responsive Design:** It has a responsive design that works on most of the devices.
-   **Toggle Dimension Range Visibility:** Hide or show the dimension range sliders for a cleaner view.
-   **Performance:** Optimized to load fast.
- **Informative Tooltips:** Has tooltips for easy usage of the site.

## Tech Stack

-   **Next.js:** A React framework for building user interfaces.
-   **TypeScript:** A statically-typed superset of JavaScript for enhanced code quality and maintainability.
-   **React:** A JavaScript library for building user interfaces.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **Lucide-react:** for icons.
- **shadcn/ui:** A Component library.

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/visnkmr/carproj.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd carproj
    ```

3.  Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4.  Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5.  Open your web browser and visit `http://localhost:3000` to view the application.

### Build and Production
To build the application for production

```bash
npm run build
# or
yarn build
```

To start the application in production mode:

```bash
npm start
#or
yarn start
```

### Project Structure
- src/app/page.tsx: Main page component for the car comparison application.
- src/app/carmodels.tsx: Contains the data for all car models.
- src/components/ui/: Components that come from shadcn/ui
- other usual nextjs folders.

### Contributing
Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive messages.
- Push your branch to your forked repository.
- Submit a pull request to the main branch of the original repository.

### Adding New Car Models
To add new car models, follow these steps:

- Open the src/app/carmodels.tsx file.
- Add the new car model data as a new object in the corresponding manufacturer array (e.g., renault, nissan, etc.).
- Ensure that the new car data conforms to the CarData type definition in src/app/page.tsx.
- Add the exported car model to page.tsx file.
- Submit a pull request.

### License
This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE.

### Contact
If you have any questions or suggestions, feel free to contact me through GitHub. https://github.com/visnkmr/carproj

### Acknowledgements
shadcn/ui  
Lucide  
v0  


Created with ❤️ by visnkmr