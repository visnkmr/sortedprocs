# SortedProc: Processor Comparison and Performance Explorer

[![GitHub license](https://img.shields.io/github/license/visnkmr/procproj)](https://github.com/visnkmr/procproj/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/visnkmr/procproj)](https://github.com/visnkmr/procproj/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/visnkmr/procproj)](https://github.com/visnkmr/procproj/network/members)

**SortedProc** is a web application built with Next.js (React) and TypeScript that allows users to explore, filter, sort, and compare various processor models based on their performance specifications and benchmarks. It's designed to help users make informed decisions when choosing processors for their computing needs.

## Features

-   **Extensive Processor Database:** Includes a wide range of processor models from different manufacturers like MediaTek, Qualcomm, Apple, Samsung, Google, HiSilicon, Unisoc, and others.
-   **Performance Filtering:** Filter processors based on cores, clock speed, AnTuTu score, Geekbench single/multi-core scores, and performance grade using interactive sliders.
-   **Search Functionality:** Quickly find specific processor models by name.
-   **Manufacturer Filtering:** Filter processors by manufacturer.
-   **Sorting:** Sort processors by name, cores, clock speed, AnTuTu score, Geekbench single/multi, performance score, and manufacturer in ascending or descending order.
-   **Pinning:** Pin a processor to compare it directly with other models using detailed percentage-based differences in performance metrics and specifications.
- **Starring:** Mark processors as your favourite and view all the starred processors easily.
-   **Comparison Filters:** Set up conditional comparisons (greater than or less than) for a specific field relative to the pinned processor.
-   **Dynamic Performance Ranges:** The slider ranges dynamically adjust based on the minimum and maximum values for each performance metric across all included processor models.
- **Calculated Fields:** Shows calculated performance metrics and core configurations.
- **Responsive Design:** Features a responsive design that works on most devices.
-   **Customizable Layout:** Choose from 2, 3, 4, 5, 6, or 8 items per row to customize your viewing experience.
-   **Toggle Specification Range Visibility:** Hide or show the specification range sliders for a cleaner view.
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
    git clone https://github.com/visnkmr/procproj.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd procproj
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
- src/app/page.tsx: Main page component for the processor comparison application.
- src/app/carmodels.tsx: Contains the data for all processor models with performance specifications.
- src/components/ui/: Components that come from shadcn/ui
- other usual nextjs folders.

### Contributing
Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive messages.
- Push your branch to your forked repository.
- Submit a pull request to the main branch of the original repository.

### Adding New Processor Models
To add new processor models, follow these steps:

- Open the src/app/carmodels.tsx file.
- Add the new processor model data as a new object in the processors array.
- Ensure that the new processor data conforms to the ProcessorData type definition in src/app/page.tsx.
- Submit a pull request.

### License
This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE.

### Contact
If you have any questions or suggestions, feel free to contact me through GitHub. https://github.com/visnkmr/procproj

### Acknowledgements
shadcn/ui  
Lucide  
v0  


Created with ❤️ by visnkmr